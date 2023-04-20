from rest_framework.serializers import ModelSerializer
from .models import Destination, Trip, User

class TripSerializer(ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class DestinationSerializer(ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'

class UserDestinationTripSerializer(ModelSerializer):
    user = UserSerializer(many=False)
    destination = DestinationSerializer(many=False)

    class Meta:
        model = Trip
        fields = ['start_date', 'end_date', 'user', 'destination']
