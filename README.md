# ClipGen

ClipGen is a local-first MVP that turns long-form YouTube videos into AI-estimated, viral-ready short clips with auto-generated captions.

## What’s included
- FastAPI backend with job + clip endpoints
- Celery worker pipeline scaffolding
- Next.js + Tailwind UI skeleton
- Docker Compose for local orchestration
- Algorithm plan and pipeline details in `docs/`

## Local setup

### Requirements
- Docker + Docker Compose

### Run with Docker Compose
```bash
docker compose up --build
```

### Local dev (without Docker)
```bash
# Backend
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Worker
cd ../worker
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
celery -A celery_app worker --loglevel=info

# Frontend
cd ../frontend
npm install
npm run dev
```

## API endpoints (MVP)
- `POST /api/jobs`
- `GET /api/jobs/{id}`
- `GET /api/jobs/{id}/clips`
- `GET /api/clips/{clip_id}/download`
- `GET /api/clips/{clip_id}/captions`

## Docs
- `docs/PLAN.md` — step-by-step implementation plan
- `docs/PIPELINE.md` — worker pseudocode + FFmpeg commands
- `docs/STRUCTURE.md` — folder structure overview
