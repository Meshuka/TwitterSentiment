# Generated by Django 4.0.1 on 2022-01-11 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_newuser_session_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='is_registered',
            field=models.BooleanField(default=False),
        ),
    ]
