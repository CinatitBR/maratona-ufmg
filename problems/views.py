from rest_framework import generics
from rest_framework.response import Response

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

    def get_queryset(self):
        topic_id = self.request.GET.get('topic_id', None)
        completed = self.request.GET.get('completed', None)

        if topic_id:
            new_queryset = super().get_queryset().filter(topic_id=topic_id)

            return new_queryset

        return super().get_queryset()


class TopicDetail(generics.RetrieveAPIView):
    """
    Retrieve a topic.
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer