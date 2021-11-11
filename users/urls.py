from django.urls import path
from .views import BlackListTokenView, CustomUserCreateView

app_name = "users"

urlpatterns = [
    path("create/", CustomUserCreateView.as_view(), name="create_user"),
    path("logout/blacklist/", BlackListTokenView.as_view, name="blacklist"),
]
