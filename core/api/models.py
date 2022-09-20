from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    pass



class Lession(models.Model):
    lession_name = models.CharField(max_length=200)
    description = models.TextField(default="")
    created = models.DateTimeField(auto_created=True)
    valid = models.BooleanField(default=True)
    profile_pic = models.ImageField(upload_to="images/")
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="lessions")

    def __str__(self):
        return self.lession_name

class Topic(models.Model):
    topic_name = models.CharField(max_length=200)
    video = models.FileField(upload_to="videos")
    notes = models.FileField(upload_to="notes/")
    lession = models.ForeignKey("Lession", on_delete=models.CASCADE)


    def __str__(self):
        return self.topic_name