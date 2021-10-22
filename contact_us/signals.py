from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

from contact_us.models import ContactUs

@receiver(post_save, sender=ContactUs)
def send_contact_us_email(sender, instance, created, **kwargs):
    if created:
        ctx = {
            'id': instance.id,
            'name': instance.name,
            'email': instance.email,
            'phone': instance.phone,
            'message': instance.message
        }

        msg_html = render_to_string('contact_us.html', ctx)
        plain_msg = strip_tags(msg_html)

        subject = 'Inquiry | ' + instance.name
        from_email = settings.DEFAULT_FROM_EMAIL
        receiver = settings.INQUIRY_NOTIFICATION_EMAIL

        send_mail(subject,
            plain_msg,
            from_email, 
            [receiver], 
            html_message=msg_html,
            fail_silently=False)

