from rest_framework import generics

from problems.models import Problem, Topic
from problems.serializers import ProblemSerializer, TopicSerializer

# Create your views here.

class ProblemList(generics.ListCreateAPIView):
    """
    List or create problems. 
    `GET` for list and `POST` for create.
    """
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class TopicDetail(generics.RetrieveAPIView):
    """
    Retrieve a topic.
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer