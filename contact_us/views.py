from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import ContactUs
from .serializers import ContactUsSerializer

class ContactUsViewSet(mixins.CreateModelMixin,
                        viewsets.GenericViewSet):
    """
    A ViewSet for viewing ContactUs.
    """
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

