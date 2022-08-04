from rest_framework import generics
from rest_framework.permissions import DjangoModelPermissions

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
    permission_classes = [DjangoModelPermissions]

    def get_queryset(self):
        topic_id = self.request.GET.get('topic_id', None)
        completed = self.request.GET.get('completed', None)

        if topic_id:
            new_queryset = super().get_queryset().filter(topic_id=topic_id)

            return new_queryset

        return super().get_queryset()

class ProblemDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a problem.
    """
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer
    permission_classes = [DjangoModelPermissions]

class TopicDetail(generics.RetrieveAPIView):
    """
    Retrieve a topic.
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer