# Serializers for blog models
from blog.models import Post, Category
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "category",
            "id",
            "title",
            "slug",
            "author",
            "excerpt",
            "content",
            "published",
            "status",
        )
