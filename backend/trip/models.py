from django.utils.translation import gettext_lazy as _
from django.db.models import Model, CharField, IntegerField, DateField, ForeignKey, CASCADE

class User(Model):
    username = CharField(
        _('User name'),
        max_length=20,
        null=True
    )
    email = CharField(
        _('User email'),
        max_length=200,
        null=True
    )

    def __str__(self):
        return f"{self.username}"

class Trip(Model):
    # id = IntegerField(
    #     _('Trip id'),
    #     unique=True,
    #     primary_key=True
    # )
    main_destination = CharField(
        _('Trip main destination'),
        max_length=200,
        null=False,
        default=''
    )
    start_date = DateField(
        _('Trip start date'),
        null=True
    )
    end_date = DateField(
        _('Trip end date'),
        null=True
    )
    # destinations = 
    user = ForeignKey(User, null=True, on_delete=CASCADE)

    def __str__(self):
        return f"{self.id} {self.main_destination}"


