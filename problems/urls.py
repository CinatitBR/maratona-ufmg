from django.urls import path

from problems import views

urlpatterns = [
    path('problems/', views.ProblemList.as_view(), name='problem-list'),
    path('topics/<int:pk>/', views.TopicDetail.as_view(), name='topic-detail')
]
