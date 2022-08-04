from rest_framework import serializers
from problems.models import Problem, Topic


class ProblemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Problem
        fields = ['problem_name', 'url', 'difficulty', 'topic', 'completed']

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['topic_name']