# Generated by Django 4.0.2 on 2022-03-16 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0012_auto_20220309_1104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
