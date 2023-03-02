# Generated by Django 4.1.7 on 2023-03-01 23:19

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rat_strats', '0002_alter_strat_abandons_alter_strat_attempts_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='strat',
            name='cover_image',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='strat',
            name='video',
            field=models.FileField(upload_to='', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]),
        ),
    ]