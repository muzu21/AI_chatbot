# ClipGen Worker Pipeline

## Pseudocode

```
process_job(job_id, youtube_url, options):
    validate_url(youtube_url)
    if cached(job_id, youtube_url):
        reuse transcript + analysis
    else:
        video_path, metadata = ytdlp_download(youtube_url)
        audio_path = ffmpeg_extract_audio(video_path)
        transcript = faster_whisper(audio_path, word_timestamps=True)
        segments = build_sentence_segments(transcript)
        candidates = []
        for segment in segments:
            if has_hook(segment.text):
                window = expand_window(segment, target_length)
                features = {
                    audio_peak: compute_audio_peak(audio_path, window),
                    emotion: sentiment_spike(window.text),
                    hook_keywords: hook_score(window.text),
                    topic_shift: embedding_shift(window.text),
                    speech_rate_change: speech_rate_delta(transcript, window),
                }
                score = weighted_sum(features)
                candidates.append(window.with_score(score, features))
        ranked = non_max_suppression(candidates, overlap=0.3)
        filtered = enforce_length(ranked, min_len, max_len)

    for window in filtered:
        crop = detect_face_crop(video_path, window, aspect_ratio)
        clip_path = ffmpeg_cut(video_path, window.start, window.end, crop)
        captions = generate_vtt(transcript, window)
        burned = ffmpeg_burn_captions(clip_path, captions, style)
        save_clip(job_id, window, burned, captions)

    update_job_status(job_id, "completed")
```

## FFmpeg Commands (examples)

### Extract audio for Whisper
```
ffmpeg -y -i input.mp4 -vn -acodec pcm_s16le -ar 16000 -ac 1 audio.wav
```

### Cut clip window
```
ffmpeg -y -i input.mp4 -ss {start} -to {end} -c copy clip_raw.mp4
```

### Auto reframe (9:16 crop centered on face)
```
ffmpeg -y -i input.mp4 -vf "crop={crop_w}:{crop_h}:{x}:{y},scale=1080:1920" -c:a copy clip_reframed.mp4
```

### Burn captions with ASS
```
ffmpeg -y -i clip_reframed.mp4 -vf "subtitles=captions.ass" -c:a copy clip_captioned.mp4
```

### Burn captions with drawtext (simple)
```
ffmpeg -y -i clip_reframed.mp4 -vf "drawtext=textfile=captions.txt:fontcolor=white:fontsize=48:box=1:boxcolor=black@0.5:boxborderw=10:x=(w-text_w)/2:y=h-150" -c:a copy clip_captioned.mp4
```
