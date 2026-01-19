from fastapi import APIRouter, HTTPException

from app.schemas import ClipListResponse, ClipResponse, JobCreateRequest, JobResponse

router = APIRouter()


@router.post("/jobs", response_model=JobResponse)
async def create_job(payload: JobCreateRequest) -> JobResponse:
    # TODO: enqueue background processing job via Celery
    return JobResponse(
        id="job_placeholder",
        status="queued",
        youtube_url=payload.youtube_url,
        options=payload.options,
        message="Job queued for processing",
    )


@router.get("/jobs/{job_id}", response_model=JobResponse)
async def get_job(job_id: str) -> JobResponse:
    # TODO: fetch job from database
    if job_id != "job_placeholder":
        raise HTTPException(status_code=404, detail="Job not found")
    return JobResponse(
        id=job_id,
        status="processing",
        youtube_url="https://youtube.com/watch?v=placeholder",
        options=None,
        message="Job is processing",
    )


@router.get("/jobs/{job_id}/clips", response_model=ClipListResponse)
async def list_clips(job_id: str) -> ClipListResponse:
    # TODO: load clips from database
    return ClipListResponse(job_id=job_id, clips=[])


@router.get("/clips/{clip_id}/download")
async def download_clip(clip_id: str) -> dict:
    # TODO: return streaming response or signed URL
    return {"clip_id": clip_id, "download_url": f"/downloads/{clip_id}.mp4"}


@router.get("/clips/{clip_id}/captions", response_model=ClipResponse)
async def get_captions(clip_id: str) -> ClipResponse:
    # TODO: fetch captions location
    return ClipResponse(
        clip_id=clip_id,
        start_time=0.0,
        end_time=30.0,
        score=0.0,
        score_breakdown={},
        title_suggestion="",
        video_url="",
        captions_url=f"/downloads/{clip_id}.vtt",
    )
