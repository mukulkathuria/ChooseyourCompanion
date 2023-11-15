from rest_framework import serializers
from .models import Profile

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ActivationSerializer(serializers.Serializer):
    uidb64 = serializers.CharField()
    token = serializers.CharField()
