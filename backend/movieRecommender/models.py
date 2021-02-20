# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
# Models = single, definitive source of information about your data
# Each model should map to a single database table
class Movie(models.Model):
    title = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)
    movie_poster = models.FileField()

    #represent the class object as a string
    def __str__(self):
        return self.title
