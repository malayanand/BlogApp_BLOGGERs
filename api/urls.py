# urls for api endpoints
from django.db.models import base
from django.urls import path
from django.urls.conf import include
from rest_framework import urlpatterns
from rest_framework import routers
from .views import (
    BlogpostListView,
    BlogpostDetailView,
    PostSearch,
    CreatePost,
    EditPost,
    AdminListView,
    DeletePost,
)
from rest_framework.routers import DefaultRouter

app_name = "api"


# router = DefaultRouter()
# router.register("", PostList, basename="post")
urlpatterns = [
    path("", BlogpostListView.as_view(), name="listcreate"),
    path("posts/", BlogpostDetailView.as_view(), name="detailview"),
    path("search/", PostSearch.as_view(), name="postsearch"),
    # Post admin URLs
    path("admin/create/", CreatePost.as_view(), name="createpost"),
    # Calling the "admin list view" post which will make a call to "edit post"
    path(
        "admin/edit/postdetails/<int:pk>/",
        AdminListView.as_view(),
        name="admindetailpost",
    ),
    path("admin/edit/<int:pk>/", EditPost.as_view(), name="editpost"),
    path("admin/delete/<int:pk>/", DeletePost.as_view(), name="deletepost"),
]


# urlpatterns = [
#     path("", BlogpostListView.as_view(), name="listcreate"),
#     path("<int:pk>/", BlogpostDetailView.as_view(), name="detailcreate"),
# ]
