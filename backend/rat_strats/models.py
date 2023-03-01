from django.db import models

# Create your models here.

MAP_CHOICES = [("de_vertigo", "de_vertigo"), ("de_nuke", "de_nuke"), ("de_overpass", "de_overpass"), ("de_ancient", "de_ancient") ,("de_inferno", "de_inferno") ,("de_anubis", "de_anubis"), ("de_mirage", "de_mirage")]

class Strat(models.Model):
    name = models.CharField(max_length=512)
    map = models.CharField(max_length=256, choices=MAP_CHOICES)
    
    players_required = models.IntegerField()
    smokes_required = models.IntegerField()
    molotovs_required = models.IntegerField()
    flashbangs_required = models.IntegerField()
    grenades_required = models.IntegerField()

    attempts = models.IntegerField()
    successes = models.IntegerField()
    failures = models.IntegerField()
    abandons = models.IntegerField()

    description = models.CharField(max_length=2048)
    cover_image = models.ImageField(upload_to="strat_images/")
    video = models.FileField(upload_to="strat_videos/")

    class Meta:
        verbose_name_plural = "Strats"

    def __str__(self):
        return self.name