from sqlalchemy import JSON, Column, DateTime, Float, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Job(Base):
    __tablename__ = "jobs"

    id = Column(String, primary_key=True)
    youtube_url = Column(String, nullable=False)
    status = Column(String, nullable=False, default="queued")
    options = Column(JSON, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)


class Clip(Base):
    __tablename__ = "clips"

    id = Column(String, primary_key=True)
    job_id = Column(String, nullable=False, index=True)
    start_time = Column(Float, nullable=False)
    end_time = Column(Float, nullable=False)
    score = Column(Float, nullable=False)
    score_breakdown = Column(JSON, nullable=False, default=dict)
    title_suggestion = Column(String, nullable=False, default="")
    video_path = Column(String, nullable=False, default="")
    captions_path = Column(String, nullable=False, default="")
    created_at = Column(DateTime, nullable=True)
