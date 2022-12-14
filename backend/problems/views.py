from rest_framework import generics, viewsets
from rest_framework.permissions import DjangoModelPermissions
from rest_framework.authentication import BasicAuthentication

from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication

from problems.models import Problem, Topic, Resource
from problems.serializers import ProblemSerializer, TopicSerializer, ResourceSerializer


# Create your views here.

class Login(KnoxLoginView):
    authentication_classes = [BasicAuthentication]

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

class TopicViewSet(viewsets.ModelViewSet):
    """
    Viewset for managing topics.

    List, create, retrieve, update, delete.
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [DjangoModelPermissions]

class ResourceViewSet(viewsets.ModelViewSet):
    """
    Viewset for managing resources.

    List, create, retrieve, update, delete.
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [DjangoModelPermissions]