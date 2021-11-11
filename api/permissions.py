from rest_framework.permissions import SAFE_METHODS, BasePermission


# Custom permission for allowing only the owner of a blog post to edit and delete that post
class PostUserWritePermission(BasePermission):
    message = "Editing process is restricted to the author only"

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        return obj.author == request.user
