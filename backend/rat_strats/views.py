from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import generics
from .models import Strat
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializer import StratSerializer

# Create your views here.

class CreateStrat(generics.CreateAPIView):
    serializer_class = StratSerializer


class GetStrats(generics.ListAPIView):
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