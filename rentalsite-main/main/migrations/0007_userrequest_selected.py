# Generated by Django 4.1.7 on 2023-08-13 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_userrequest_type_of_companion'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrequest',
            name='selected',
            field=models.BooleanField(default=False),
        ),
    ]