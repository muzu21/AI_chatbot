# ClipGen Implementation Plan

## Phase 1: Project scaffolding
1. Create `backend`, `worker`, and `frontend` folders with initial project skeletons.
2. Define FastAPI routes and response models for jobs and clips.
3. Create worker pipeline placeholders and Celery configuration.
4. Add Next.js pages for input, job progress, and clip results.

## Phase 2: Core ingestion
1. Validate and normalize YouTube URLs.
2. Use `yt-dlp` to fetch metadata and download video/audio to a job workspace.
3. Cache downloads/transcripts keyed by YouTube URL hash.
4. Enforce duration caps and error messages for longer videos.

## Phase 3: Transcription
1. Extract audio as WAV/FLAC for transcription.
2. Run `faster-whisper` with word-level timestamps and language detection.
3. Store transcript in JSON + VTT/SRT formats for reuse.

## Phase 4: Engagement scoring
1. Split transcript into sentences and build candidate windows.
2. Compute engagement features:
   - Audio intensity (RMS/peak + pitch variance)
   - Speech rate changes
   - Hook keyword detection
   - Sentiment/emotion spikes
   - Topic shift via embeddings
3. Score windows via weighted sum and normalize.
4. Run non-max suppression to remove overlaps.
5. Enforce min/max length and hook lead-ins.

## Phase 5: Clip generation
1. Use face detection + tracking for 9:16 crops.
2. Fallback to center crop or motion-based saliency.
3. Cut clips with FFmpeg, ensuring clean boundaries.
4. Generate captions (SRT/VTT) and burn captions when selected.

## Phase 6: UI + editing
1. Hook up frontend to backend APIs.
2. Build clip editor with timeline, in/out adjustments, and caption editing.
3. Add export buttons and download links.

## Phase 7: Ops and QA
1. Add logging, retry, and error handling.
2. Add rate limiting and retention cleanup jobs.
3. Add minimal unit tests for scoring and endpoints.
