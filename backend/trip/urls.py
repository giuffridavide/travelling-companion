from django.urls import path, include
from . import views

app_name = "trip"

urlpatterns = [
    path('sentdex/', views.homepage, name='homepage'),

    # Dennis
    path('dennis/', views.get_routes, name='routes'),
    path('api/trips/', views.get_trips, name='trips'),
    # <str if used to cast the pk to string
    path('api/trips/<str:pk>/', views.get_trip, name='trip'),
    # path('', include('backend.urls')),
]
