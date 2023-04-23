from django.urls import path, include
from . import views

from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainPairView

app_name = "trip"

urlpatterns = [
    path('sentdex/', views.homepage, name='homepage'),

    # Dennis
    path('dennis/', views.get_routes, name='routes'),

    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/users/', views.get_users, name='users'),
    path('api/trips/', views.get_trips, name='trips'),
    path('api/destinations/', views.get_destinations, name='destinations'),
    path('api/nearbyDestinations/', views.get_nearby_destinations, name='nearby'),
    path('api/newTrip/', views.new_trip, name='newTrip'),
    path('api/updateTrip/', views.update_trip, name='newTrip'),
    # <str if used to cast the pk to string
    path('api/trips/<str:pk>/', views.get_trip, name='trip'),
    path('login/', views.login_page, name='login'),

    # sentdex
    path('logout/', views.logout_request, name='logout'),
    # path('', include('backend.urls')),
]
