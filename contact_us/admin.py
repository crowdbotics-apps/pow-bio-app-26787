from django.contrib import admin
from contact_us.models import ContactUs

class ContacUsAdminModel(admin.ModelAdmin):
    list_display = ('id' ,'name', 'email', 'phone', 'message', 'created')
    empty_value_display = '--empty--'

admin.site.register(ContactUs, ContacUsAdminModel)
