# ClipGen Folder Structure

```
AI_chatbot/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── routes.py
│   │   ├── db/
│   │   │   └── session.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── schemas.py
│   └── requirements.txt
├── worker/
│   ├── celery_app.py
│   ├── pipeline.py
│   └── requirements.txt
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   └── ClipGenForm.tsx
│   │   ├── jobs/
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── clips/
│   │   │           └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── next.config.js
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
├── docker-compose.yml
├── docs/
│   ├── PIPELINE.md
│   ├── PLAN.md
│   └── STRUCTURE.md
└── README.md
```
