# Generated by Django 4.2 on 2023-05-01 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("rufus_app", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="menu",
            name="image",
            field=models.ImageField(
                default="menu_images/default_image.jpg", upload_to="menu_images/"
            ),
        ),
    ]