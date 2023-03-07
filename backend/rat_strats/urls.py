from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('list/', views.GetStrats.as_view()),
    path('create/', views.CreateStrat.as_view()),
    path('<int:pk>', views.GetSingleStrat.as_view()),
    path('modify/<int:pk>', views.ModifyStrat.as_view()),
]
