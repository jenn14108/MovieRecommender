# serializers are needed to convert model instances to JSON so the frontend can work with the received data
from rest_framework import serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        # model to work with
        model = Movie
        # fields to convert to JSON
        fields = ('id', 'title','genre','movie_poster')
