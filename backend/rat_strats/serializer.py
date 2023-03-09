from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class CreatedBySerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']

class StratCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Strat
        fields="__all__"
        extra_kwargs = {'created_by': {'default': serializers.CurrentUserDefault(), 'read_only': True}}

class StratModifySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Strat
        exclude= ["id"]
        extra_kwargs = {'created_by': {'default': serializers.CurrentUserDefault(), 'read_only': True}}

class StratSerializer(serializers.ModelSerializer):

    created_by = CreatedBySerializer(read_only=True)

    class Meta:
        model = models.Strat
        fields="__all__"