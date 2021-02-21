# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import MovieSerializer
from .models import Movie
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse


# Create your views here.
# viewsets base class provides the impl for default CRUD operations
class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['title', 'id']


    # temporary method to test frontend-to-backend connectivity using axios
    # def getMovie(self, request):
    #     logger.info("This is the request: " + request)
    #     if request.method == "GET":
    #         requestedMovieTitle = request.GET.get('movie')
    #         movie = queryset.get(title=requestedMovieTitle)
    #         serializer = MovieSerializer(movie, context={'request': request}, many=false)
    #     return Response(serializer.data)


    def retrieve(self, request, *args, **kwargs):
        print('HI!')
        print(request.query_params)
        #movie = Movie.objects.all().filter(title=request.GET.get('title',''))
        movie = Movie.objects.all().filter(title='Klaus')
        serializer = MovieSerializer(movie, many=True)
        jsonResponse = JsonResponse(serializer.data, safe=False)
        jsonResponse['Access-Control-Allow-Origin'] = '*'
        print(jsonResponse)
        return jsonResponse
