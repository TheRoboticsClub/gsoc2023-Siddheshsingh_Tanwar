# Generated by Django 3.2.4 on 2021-06-30 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0009_alter_exercise_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='language',
            field=models.CharField(choices=[('scratch', 'Scratch'), ('python', 'Python'), ('javascript', 'JavaScript')], max_length=40),
        ),
    ]
