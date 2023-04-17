from rest_framework.serializers import ModelSerializer
from .models import Trip, User

class TripSerializer(ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'