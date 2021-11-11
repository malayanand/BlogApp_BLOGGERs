from django.db import models
from django.db.models.base import Model
from django.utils import timezone
from django.conf import settings


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name


class Post(models.Model):
    # Making custom model manager
    # Using filter on get_queryset to only show published posts by default
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    OPTIONS = (("draft", "Draft"), ("published", "Published"))

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=100)
    excerpt = models.TextField(max_length=210, null=True)
    content = models.TextField()
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="blog_posts"
    )
    slug = models.SlugField(max_length=250, unique_for_date="published")
    status = models.CharField(max_length=10, choices=OPTIONS, default="published")
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # Custom manager

    class Meta:
        ordering = ("-published",)

    def __str__(self) -> str:
        return self.title
