# -*- coding: utf-8 -*-
# Interface that can be used to see that the CRUD operations work on the models created
# To use it a superuser account needs to be created via 'python manage.py createsuperuser'
from __future__ import unicode_literals

from django.contrib import admin
from .models import Movie

class MovieAdmin(admin.ModelAdmin):
    list_display = ('title','genre', 'movie_poster')

# Register your models here.
admin.site.register(Movie, MovieAdmin)
