from django.shortcuts import get_object_or_404
from rest_framework import generics, serializers, viewsets, filters
from rest_framework import permissions
from rest_framework.decorators import permission_classes
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import (
    BasePermission,
    DjangoModelPermissionsOrAnonReadOnly,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from .permissions import PostUserWritePermission


# List view showing all the posts
class BlogpostListView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)


# Detail view for each individual post
class BlogpostDetailView(generics.RetrieveAPIView):
    serializer_class = PostSerializer
    permission_classes = [PostUserWritePermission]

    def get_object(self, queryset=None, **kwargs):
        slug = self.request.query_params.get("slug", None)
        print(slug)
        return get_object_or_404(Post, slug=slug)


class PostSearch(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["^slug"]


class AdminListView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CreatePost(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class EditPost(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class DeletePost(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


"""
Explore all implementations through model viewsets
"""

# class PostList(viewsets.ModelViewSet):
#     permission_classes = [PostUserWritePermission]
#     serializer_class = PostSerializer

#     def get_object(self, queryset=None, **kwargs):
#         slug = self.request.query_params.get(
#             "slug", None
#         )  # Dynamic filtering based on query params passed through url
#         return Post.objects.filter(slug=slug)

#     def get_queryset(self):
#         return Post.objects.all()
