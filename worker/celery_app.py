from celery import Celery

celery_app = Celery(
    "clipgen",
    broker="redis://redis:6379/0",
    backend="redis://redis:6379/1",
)

celery_app.conf.task_routes = {"worker.pipeline.process_job": {"queue": "clipgen"}}
