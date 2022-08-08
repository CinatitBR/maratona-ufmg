from django.urls import path, include
from rest_framework.routers import SimpleRouter
from knox import views as knox_views
from problems import views


router = SimpleRouter()

# Register topics endpoints
router.register('topics', views.TopicViewSet, basename='topic')

urlpatterns = [
    path('auth/login/', views.Login.as_view(), name='knox_login'),
    path('auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('auth/logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),

    path('problems/', views.ProblemList.as_view(), name='problem-list'),
    path('problems/<int:pk>/', views.ProblemDetail.as_view(), name='problem-detail'),
]

# Include router urls on urlpatterns
urlpatterns += router.urls
