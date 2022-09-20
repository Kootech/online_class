from rest_framework import serializers

from .models import User, Lession, Topic


class LessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lession
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'