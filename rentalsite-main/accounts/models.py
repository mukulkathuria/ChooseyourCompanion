from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    age = models.PositiveIntegerField(default=0)
    bio = models.TextField(max_length=1000, blank=True)
    is_companion = models.BooleanField(default=False)
    selected = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username
