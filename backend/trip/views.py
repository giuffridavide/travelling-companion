from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import TripSerializer, UserDestinationTripSerializer, UserSerializer
from .models import Trip, User
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    repr(serializer_class)


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

        {
            'Endpoint': '/api/token',
            'method': 'POST',
            'body': None,
            'description': ''
        },
        {
            'Endpoint': '/api/token/refresh',
            'method': 'POST',
            'body': None,
            'description': ''
        },
    ]

    return Response(routes)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_trips(request):
    user_id = request.user.id
    user_id = 0
    trips = Trip.objects.select_related('destination').filter(user_id=user_id).distinct('destination')

    # trips = Trip.objects.raw(f"SELECT max(tt.id) AS trip_id, max(td.id) AS destination_id, name,\
    #                                     td.punchline, td.description, start_date, end_date\
    #                             FROM trip_trip tt\
    #                             JOIN trip_destination td\
    #                             	ON tt.destination_id=td.id\
    #                             WHERE tt.user_id={user.id}\
    #                             GROUP BY name, td.punchline, td.description, start_date, end_date")
    serializer = UserDestinationTripSerializer(trips, many=True)

    print(serializer.data)

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


def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("main:homepage")

def login_page(request):
    context = {}
    return render(request, 'accounts/login.html', context)
    return redirect("main:homepage")