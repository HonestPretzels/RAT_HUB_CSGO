from django.urls import path
from . import views

urlpatterns = [
    path('', views.GetStrats.as_view()),
    path('create/', views.CreateStrat.as_view())
]