from django.db import models
from django.utils.timezone import now

class ContactUs(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=320)
    phone = models.CharField(max_length=15)
    message = models.TextField(max_length=5000)
    created = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return self.name

