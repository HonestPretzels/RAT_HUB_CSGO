from rest_framework import serializers
from . import models


class StratSerializer(serializers.ModelSerializer):

    cover_image = serializers.ImageField()
    video = serializers.FileField()

    class Meta:
        model = models.Strat
        exclude = ['id']