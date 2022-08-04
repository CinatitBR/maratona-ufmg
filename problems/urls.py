from django.urls import path
from problems import views

urlpatterns = [
    path('problems/', views.ProblemList.as_view(), name='problem-list'),
    path('problems/<int:pk>/', views.ProblemDetail.as_view(), name='problem-detail'),
    path('topics/<int:pk>/', views.TopicDetail.as_view(), name='topic-detail')
]
