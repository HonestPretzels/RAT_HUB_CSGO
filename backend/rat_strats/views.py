from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import generics
from .models import Strat
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializer import StratSerializer, StratCreateSerializer
# Create your views here.

class CreateStrat(generics.CreateAPIView):
    serializer_class = StratCreateSerializer
    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(created_by=user)
        return super().perform_create(serializer)


class GetStrats(generics.ListAPIView):
    serializer_class = StratSerializer
    queryset = Strat.objects.all()

class GetSingleStrat(generics.RetrieveAPIView):
    serializer_class = StratSerializer
    queryset = Strat.objects.all()

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/strats/',
        '/api/strats/create/',
        '/api/strats/list/',
    ]
    return Response(routes)