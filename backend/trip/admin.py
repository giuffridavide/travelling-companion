from django.contrib import admin
from .models import User, Trip, City, Destination

# Register your models here.
admin.site.register(User)
admin.site.register(Trip)
admin.site.register(City)
admin.site.register(Destination)