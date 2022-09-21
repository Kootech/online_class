from django.shortcuts import render

from .models import Lession, User, Topic
from .serializer import LessionSerializer, TopicSerializer, UserSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics


class LessionList(APIView):

    def get(self, request, format=None):
        lessions = Lession.objects.all()
        serializer = LessionSerializer(lessions, many=True)
        return Response(serializer.data)

class LessionDetail(generics.RetrieveAPIView):
    queryset = Lession.objects.all()
    serializer_class = LessionSerializer


class TopicList(APIView):

    def get(self, request, format=None):
        topic = Topic.objects.all()
        serializer = TopicSerializer(many=True)
        return Response(serializer.data)