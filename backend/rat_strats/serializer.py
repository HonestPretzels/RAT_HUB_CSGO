from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class CreatedBySerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']

class StratCreateSerializer(serializers.ModelSerializer):

    cover_image = serializers.ImageField()
    video = serializers.FileField()

    class Meta:
        model = models.Strat
        fields="__all__"
        extra_kwargs = {'created_by': {'default': serializers.CurrentUserDefault(), 'read_only': True}}

class StratModifySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Strat
        exclude= ["cover_image", "video"]
        extra_kwargs = {'created_by': {'default': serializers.CurrentUserDefault(), 'read_only': True}}

class StratSerializer(serializers.ModelSerializer):

    cover_image = serializers.ImageField()
    video = serializers.FileField()
    created_by = CreatedBySerializer(read_only=True)

    class Meta:
        model = models.Strat
        fields="__all__"