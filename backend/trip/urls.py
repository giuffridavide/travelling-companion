from django.urls import path, include
from . import views

app_name = "trip"

urlpatterns = [
    path('sentdex/', views.homepage, name='homepage'),

    # Dennis
    path('dennis/', views.get_routes, name='routes'),
    path('trips/', views.get_trips, name='trips'),
    path('trips/<str:pk>/', views.get_trip, name='trip'),
    # path('', include('backend.urls')),
]
