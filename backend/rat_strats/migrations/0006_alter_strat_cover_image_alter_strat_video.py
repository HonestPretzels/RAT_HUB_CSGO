# Generated by Django 4.1.7 on 2023-03-06 21:34

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rat_strats', '0005_strat_created_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='strat',
            name='cover_image',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='strat',
            name='video',
            field=models.FileField(null=True, upload_to='', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]),
        ),
    ]