# Generated by Django 4.0.1 on 2022-01-06 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='session_token',
            field=models.CharField(default=0, max_length=20),
        ),
    ]
