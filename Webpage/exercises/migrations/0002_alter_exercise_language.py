# Generated by Django 3.2 on 2021-04-25 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='language',
            field=models.CharField(choices=[('javascript', 'JavaScript'), ('scratch', 'Scratch'), ('python', 'Python')], max_length=40),
        ),
    ]
