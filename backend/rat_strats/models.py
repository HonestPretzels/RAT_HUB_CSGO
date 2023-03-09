from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import User

# Create your models here.

MAP_CHOICES = [("de_vertigo", "de_vertigo"), ("de_nuke", "de_nuke"), ("de_overpass", "de_overpass"), ("de_ancient", "de_ancient") ,("de_inferno", "de_inferno") ,("de_anubis", "de_anubis"), ("de_mirage", "de_mirage")]

class Strat(models.Model):
    name = models.CharField(max_length=512, null=False, blank=False)
    map = models.CharField(max_length=256, choices=MAP_CHOICES, null=False, blank=False)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    
    players_required = models.IntegerField(default=1)
    smokes_required = models.IntegerField(default=0)
    molotovs_required = models.IntegerField(default=0)
    flashbangs_required = models.IntegerField(default=0)
    grenades_required = models.IntegerField(default=0)

    attempts = models.IntegerField(default=0)
    successes = models.IntegerField(default=0)
    failures = models.IntegerField(default=0)
    abandons = models.IntegerField(default=0)

    description = models.CharField(max_length=2048, blank=True, null=True)
    cover_image = models.ImageField(upload_to="", null=True, blank=True)

    # Should be youtube embed links
    video = models.CharField(max_length=2048, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Strats"

    def __str__(self):
        return self.name