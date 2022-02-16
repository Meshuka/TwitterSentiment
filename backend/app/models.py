from pyexpat import model
from django.db import models
from users.models import NewUser
# Create your models here.

class Tweets(models.Model):
    tweet = models.TextField()
    sentiment = models.CharField(max_length=100)

    def __str__(self):
        return self.tweet


class TweetAnalysis(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.SET_NULL, null=True)
    sentiment_data = models.TextField()
    hour_data = models.TextField(null=True)
    product_name = models.TextField(null=True)

