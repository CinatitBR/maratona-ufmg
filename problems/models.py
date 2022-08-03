from django.db import models

# Create your models here.

class Competitor(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    institution = models.CharField(max_length=40)

class Topic(models.Model):
    topic_name = models.CharField(max_length=255)

class Problem(models.Mobel):
    class Difficulty(models.IntegerChoices):
        EASY = 1
        MEDIUM = 2
        HARD = 3

    problem_name = models.CharField(max_length=255)
    url = models.URLField(max_length=500)
    difficulty = models.IntegerField(choices=Difficulty.choices)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    completed = models.ManyToManyField('auth.User')

class Resources(models.Model):
    resource_name = models.CharField(max_length=255)
    url = models.URLField(max_length=500)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)

# Easy, Medium, Hard
