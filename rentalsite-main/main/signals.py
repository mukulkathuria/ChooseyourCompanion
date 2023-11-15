from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import UserRequest
import logging

logger = logging.getLogger(__name__)


@receiver(post_save, sender=UserRequest)
def new_user_request_notification(sender, instance, created, **kwargs):
    if created:  # checks if the instance is being created for the first time
        send_mail(
            'New User Request Received',
            'A new user request has been submitted. Please check the admin panel.',
            'javedumar507@gmail.com',
            ['javedumar507@gmail.com'],
            fail_silently=False,
        )


@receiver(post_save, sender=UserRequest)
def user_request_status_change(sender, instance, **kwargs):
    logger.info("Signal user_request_status_change called.")
    # If the instance was just created, we don't want to proceed further
    if kwargs.get('created', False):
        return

    # Check if the "selected" field has changed
    if not instance.selected:
        return

    # Previous instance before save
    prev_instance = UserRequest.objects.get(pk=instance.pk)

    if instance.selected:
        # Send email to the user
        send_mail(
            'Your Request Has Been Accepted',
            'Congratulations! Your request has been accepted. You will be paired with {}.'
            .format(instance.companion_assigned.user.username),
            'e.commerce.507umar@gmail.com',
            [instance.user.email],
            fail_silently=False,
        )

        # Send email to the companion
        send_mail(
            'You Have A New Assignment',
            'Hello {}, you have been paired with {}. Please check the platform for more details.'
            .format(instance.companion_assigned.user.username,instance.user.username),
            'e.commerce.507umar@gmail.com',
            [instance.companion_assigned.user.email],
            fail_silently=False,
        )

