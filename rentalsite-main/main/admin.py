from django.contrib import admin
from .models import *
from django.contrib import admin
from .models import EmploymentForm
from django.core.mail import send_mail
import logging


def accept_application(modeladmin, request, queryset):
    queryset.update(accepted=True)
    print(f"aceepted function: {queryset}")
    logger = logging.getLogger(__name__)
    logger.debug(f"aceepted function: {queryset}")
    for obj in queryset:
        obj.profile.is_companion = True
        obj.profile.save()
        try:
            send_mail(
                'Employment Application Accepted',
                'Congratulations! Your employment application has been accepted.',
                'e.commerce.507umar@gmail.com',
                [obj.profile.user.email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Error sending email: {e}")


def reject_application(modeladmin, request, queryset):
    queryset.update(accepted=False)
    print(f"rejected function: {queryset}")
    for obj in queryset:
        obj.profile.is_companion = False
        obj.profile.save()
        send_mail(
            'Employment Application Rejected',
            'We are sorry to inform you that your employment application has been rejected.',
            'e.commerce.507umar@gmail.com',
            [obj.profile.user.email],
            fail_silently=False,
        )


class EmploymentFormAdmin(admin.ModelAdmin):
    list_display = ['profile', 'age', 'expected_salary', 'availability_date', 'accepted']
    actions = [accept_application, reject_application]


class UserRequestAdmin(admin.ModelAdmin):
    list_display = ('user', 'preferred_meetup', 'type_of_companion', 'other_requirements')


admin.site.register(EmploymentForm, EmploymentFormAdmin)
admin.site.register(UserRequest, UserRequestAdmin)
admin.site.register(FAQ)
