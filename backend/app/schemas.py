from enum import Enum
from typing import Dict, List, Optional

from pydantic import BaseModel, Field, HttpUrl


class AspectRatio(str, Enum):
    portrait = "9:16"
    square = "1:1"
    landscape = "16:9"


class ClipLength(str, Enum):
    short = "15s"
    medium = "30s"
    long = "60s"


class ClipCount(int, Enum):
    five = 5
    ten = 10
    twenty = 20


class CaptionStyle(BaseModel):
    font_size: int = Field(default=48, ge=12, le=120)
    position: str = Field(default="bottom")
    highlight_words: bool = True
    emojis: bool = False


class JobOptions(BaseModel):
    aspect_ratio: AspectRatio = AspectRatio.portrait
    clip_length: ClipLength = ClipLength.short
    number_of_clips: ClipCount = ClipCount.five
    caption_style: CaptionStyle = CaptionStyle()
    language: Optional[str] = None


class JobCreateRequest(BaseModel):
    youtube_url: HttpUrl
    options: JobOptions = JobOptions()


class JobResponse(BaseModel):
    id: str
    status: str
    youtube_url: HttpUrl
    options: Optional[JobOptions]
    message: str


class ClipResponse(BaseModel):
    clip_id: str
    start_time: float
    end_time: float
    score: float
    score_breakdown: Dict[str, float]
    title_suggestion: str
    video_url: str
    captions_url: str


class ClipListResponse(BaseModel):
    job_id: str
    clips: List[ClipResponse]
