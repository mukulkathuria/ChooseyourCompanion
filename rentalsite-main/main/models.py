from django.db import models
from django.contrib.auth.models import User

from accounts.models import Profile


class UserRequest(models.Model):
    CHOICES = (
        ('virtual', 'Virtual (Phone / Text)'),
        ('in_person', 'In Person')
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    preferred_meetup = models.DateTimeField(max_length=100)
    type_of_companion = models.CharField(max_length=100, choices=CHOICES, default='in_person')
    other_requirements = models.TextField()
    selected = models.BooleanField(default=False)
    companion_assigned = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.SET_NULL)


class EmploymentForm(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE,null=True, blank=True)
    age = models.IntegerField(default=18)
    height = models.IntegerField(blank=True, null=True)
    languages = models.TextField(default="English")
    what_makes = models.TextField(blank=True, null=True)
    employment_history = models.TextField()
    educational_background = models.TextField()
    skills = models.TextField()
    expected_salary = models.DecimalField(max_digits=10, decimal_places=2)
    availability_date = models.DateField()
    cover_letter = models.TextField(blank=True, null=True)
    photo_face = models.ImageField(upload_to='images/', blank=True, null=True)
    photo_body = models.ImageField(upload_to='images/', blank=True, null=True)
    accepted = models.BooleanField(default=False)


class FAQ(models.Model):
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.question


class Wallet(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)


class WalletTransaction(models.Model):
    wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_date = models.DateTimeField(auto_now_add=True)
    order_id = models.CharField(max_length=50)
    STATUS_CHOICES = [('TXN_SUCCESS', 'TXN_SUCCESS'), ('TXN_FAILURE', 'TXN_FAILURE'), ('PENDING', 'PENDING')]
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default='PENDING')
    response_msg = models.TextField(blank=True, null=True)
