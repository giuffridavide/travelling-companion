from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import Destination, Trip, User

# class SpecificUserTripSerializer(Serializer):
#     trip_id = serializers.IntegerField()
#     destination_id = serializers.IntegerField()
#     name = serializers.CharField()
#     punchline = serializers.CharField()
#     description = serializers.CharField()
#     start_date = serializers.DateField()
#     end_date = serializers.DateField()


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
        # fields = '__all__'
