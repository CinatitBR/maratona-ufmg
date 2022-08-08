from django.contrib.auth.models import User 
from rest_framework import serializers
from problems.models import Problem, Topic, Resource


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ProblemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Problem
        fields = ['problem_name', 'url', 'difficulty', 'topic', 'completed']

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['topic_name']

class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resource
        fields = ['id', 'resource_name', 'url', 'topic']
