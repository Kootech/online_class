from django.urls import path

from .views import LessionList, TopicList

urlpatterns = [
    path('lessions/', LessionList.as_view()),
    path('topics/', TopicList.as_view()),
]