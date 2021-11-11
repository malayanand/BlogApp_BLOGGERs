from django.core.exceptions import ImproperlyConfigured
from django.shortcuts import render
from rest_framework import serializers
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import CustomUserRegisterSerializer
from rest_framework import status

# Create your views here.
class CustomUserCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format="json"):
        reg_serializer = CustomUserRegisterSerializer(data=request.data)
        if reg_serializer.is_valid():
            user = reg_serializer.save()
            if user:
                json = reg_serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# On logging out, blacklist the token
class BlackListTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
