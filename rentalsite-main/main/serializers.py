from rest_framework import serializers
from .models import *

class UserRequestSerializer(serializers.ModelSerializer):
    CHOICES = (
        ('virtual', 'Virtual (Phone / Text)'),
        ('in_person', 'In Person')
    )

    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), label='User')
    preferred_meetup = serializers.DateTimeField(label='Preferred Meetup Date and Time')
    type_of_companion = serializers.ChoiceField(choices=CHOICES, default='in_person', label='Type of Companion')
    other_requirements = serializers.CharField(label='Other Requirements')
    selected = serializers.BooleanField(default=False, label='Selected')
    companion_assigned = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all(), allow_null=True, label='Companion Assigned')

    class Meta:
        model = UserRequest
        fields = '__all__'


class CompanionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class CompanionProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class EmploymentFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentForm
        fields = '__all__'

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'

class WalletTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WalletTransaction
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        
class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ('question', 'answer')