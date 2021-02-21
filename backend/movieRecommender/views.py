# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MovieSerializer
from .models import Movie
import logging

# Create your views here.
# viewsets base class provides the impl for default CRUD operations
class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    logger = logging.getLogger(__name__)

    # temporary method to test frontend-to-backend connectivity using axios
    def getMovie(self, request):
        logger.info("This is the request: " + request)
        if request.method == "GET":
            requestedMovieTitle = request.GET.get('movie')
            movie = queryset.get(title=requestedMovieTitle)
            serializer = MovieSerializer(movie, context={'request': request}, many=false)
        return Response(serializer.data)
