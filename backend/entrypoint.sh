#!/bin/sh

pipenv run python manage.py flush --no-input
pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
pipenv run python convert_fixtures.py
pipenv run python manage.py loaddata dump.json
pipenv run python manage.py createsuperuser --no-input
pipenv run python manage.py runserver 0.0.0.0:8000