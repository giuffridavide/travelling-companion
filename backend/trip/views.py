from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TripSerializer, UserSerializer
from .models import Trip, User

# Create your views here.


def homepage(request):
    return HttpResponse("<h1>Wow this is cool!</h1>")


@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/trips',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of trips'
        },
        {
            'Endpoint': '/trips/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of trips'
        },
        {
            'Endpoint': '/users',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of users'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def get_trips(request):
    trips = Trip.objects.all()
    serializer = TripSerializer(trips, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_trip(request, pk):
    trips = Trip.objects.get(id=pk)
    serializer = TripSerializer(trips, many=False)
    return Response(serializer.data)