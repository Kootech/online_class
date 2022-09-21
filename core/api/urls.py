from django.urls import path

from .views import LessionDetail, LessionList, TopicList

urlpatterns = [
    path('lessions/', LessionList.as_view()),
    path('lessions/<int:pk>', LessionDetail.as_view()),
    path('topics/', TopicList.as_view()),
]