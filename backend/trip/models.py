from django.utils.translation import gettext_lazy as _
from django.db.models import Model, CharField, IntegerField, DateField, ForeignKey, CASCADE, EmailField, FloatField

class User(Model):
    username = CharField(
        _('User name'),
        max_length=20,
        null=True
    )
    email = EmailField(
        _('User email'),
        max_length=200,
        null=True
    )

    def __str__(self):
        return f"{self.username}"

class Destination(Model):
    name = CharField(
        _('Trip main destination'),
        max_length=20,
        null=False,
        default=''
    )
    punchline = CharField(
        _('A very short description of the city'),
        max_length=200,
        null=False,
        default=''
    )
    description = CharField(
        _('A long description of the city'),
        max_length=5000,
        null=False,
        default=''
    )

class City(Model):
    name = CharField(
        _('Trip main destination'),
        max_length=20,
        null=False,
        default=''
    )
    latitude = FloatField(
        _('Trip cost'),
        null=True
    )
    longitude = FloatField(
        _('Trip cost'),
        null=True
    )


class Trip(Model):
    # id = IntegerField(
    #     _('Trip id'),
    #     unique=True,
    #     primary_key=True
    # )
    start_date = DateField(
        _('Trip start date'),
        null=True
    )
    end_date = DateField(
        _('Trip end date'),
        null=True
    )
    cost = IntegerField(
        _('Trip cost'),
        null=True
    )

    user = ForeignKey(User, null=True, on_delete=CASCADE)
    destination = ForeignKey(Destination, null=True, on_delete=CASCADE)
    city = ForeignKey(City, null=True, on_delete=CASCADE)

    # def __str__(self):
    #     return f"{self.id} {self.main_destination}"


