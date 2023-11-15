from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.core.mail import EmailMessage
from .forms import UserRegisterForm
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_str
from .forms import ProfileForm
from main.models import Profile
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .models import Profile
from .serializers import ActivationSerializer
from django.utils.http import urlsafe_base64_decode
from rest_framework import generics, permissions
from rest_framework.views import APIView
from .serializers import UserRegisterSerializer



from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.contrib import messages
from django.shortcuts import render, redirect

from .forms import UserRegisterForm  # Import your UserRegisterForm
from allauth.socialaccount.views import SignupView

class GoogleSignupView(SignupView):
    template_name = 'users/signup.html'

# def register(request):
#     if request.method == 'POST':
#         form = UserRegisterForm(request.POST)
#         if form.is_valid():
#             user = form.save(commit=False)
#             user.is_active = False  # Deactivate account till it is confirmed
#             user.save()

#             # Create a profile or update it if it already exists
#             profile, created = Profile.objects.get_or_create(user=user)
#             profile.phone = form.cleaned_data['phone']
#             profile.location = form.cleaned_data['location']
#             profile.age = form.cleaned_data['age']
#             profile.save()

#             current_site = get_current_site(request)
#             mail_subject = 'Activate your account.'
#             message = render_to_string('users/activate_email.html', {
#                 'user': user,
#                 'domain': current_site.domain,
#                 'uid': urlsafe_base64_encode(force_bytes(user.pk)),
#                 'token': default_token_generator.make_token(user),
#             })
#             email = EmailMessage(mail_subject, message, to=[user.email])
#             email.send()

#             messages.success(request, 'User created successfully. You can now log in.')
#             return redirect('accounts:login')

#     else:
#         form = UserRegisterForm()
#     return render(request, 'users/signup.html', {'form': form})

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False  # Deactivate account until it is confirmed
            user.save()

            # Create a profile or update it if it already exists
            profile, created = Profile.objects.get_or_create(user=user)
            profile.phone = form.cleaned_data['phone']
            profile.location = form.cleaned_data['location']
            profile.age = form.cleaned_data['age']
            profile.save()

            # Additional logic based on user type
            user_type = form.cleaned_data.get('user_type')
            if user_type == 'companion':
                # Handle companion-specific logic here
                profile.height = form.cleaned_data['height']
                profile.languages = form.cleaned_data['languages']
                profile.what_makes = form.cleaned_data['what_makes']
                profile.employment_history = form.cleaned_data['employment_history']
                profile.educational_background = form.cleaned_data['educational_background']
                profile.skills = form.cleaned_data['skills']
                profile.expected_salary = form.cleaned_data['expected_salary']
                profile.availability_date = form.cleaned_data['availability_date']
                profile.cover_letter = form.cleaned_data['cover_letter']
                profile.photo_face = form.cleaned_data['photo_face']
                profile.photo_body = form.cleaned_data['photo_body']
                profile.accepted = form.cleaned_data['accepted']
                profile.save()

            current_site = get_current_site(request)
            mail_subject = 'Activate your account.'
            message = render_to_string('users/activate_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': default_token_generator.make_token(user),
            })
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.send()

            messages.success(request, 'User created successfully. You can now log in.')
            return redirect('accounts:login')

    else:
        form = UserRegisterForm()

    return render(request, 'users/signup.html', {'form': form})




class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.is_active = False  # Deactivate account until it is confirmed
            user.save()

            # Create or update the user's profile
            phone = serializer.validated_data.get('phone')
            location = serializer.validated_data.get('location')
            age = serializer.validated_data.get('age')
            profile, created = Profile.objects.get_or_create(user=user)
            profile.phone = phone
            profile.location = location
            profile.age = age
            profile.save()

            # Send activation email
            current_site = get_current_site(request)
            mail_subject = 'Activate your account.'
            message = render_to_string('users/activate_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': default_token_generator.make_token(user),
            })
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.send()

            return Response({'message': 'User registered successfully. Check your email to activate your account.'},
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        messages.success(request, 'Your account has been confirmed.')
        return redirect('accounts:login')
    else:
        messages.warning(request, 'The confirmation link was invalid, possibly because it has already been used.')
        return redirect('main:home')


def account_activation_sent(request):
    return render(request, 'users/account_activation_sent.html')

class ActivationView(APIView):
    def post(self, request):
        serializer = ActivationSerializer(data=request.data)

        if serializer.is_valid():
            uidb64 = serializer.validated_data.get('uidb64')
            token = serializer.validated_data.get('token')

            try:
                uid = force_str(urlsafe_base64_decode(uidb64))
                user = User.objects.get(pk=uid)
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                user = None

            if user is not None and default_token_generator.check_token(user, token):
                user.is_active = True
                user.save()
                messages.success(request, 'Your account has been confirmed.')
                return redirect('accounts:login')
            else:
                messages.warning(request, 'The confirmation link was invalid, possibly because it has already been used.')
                return redirect('main:home')
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required
def profile_view(request):
    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=request.user.profile)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your profile has been updated.')
            return redirect('accounts:profile_view')
    else:
        form = ProfileForm(instance=request.user.profile)
    return render(request, 'accounts/profile.html', {'form': form})


@login_required
def user_profile_view(request, user_id):
    user_profile = get_object_or_404(Profile, user__id=user_id)

    return render(request, 'users/user_profile_detail.html', {'profile': user_profile})

import json
from django.http import JsonResponse


def location_suggestions(request):
    term = request.GET.get('term', '')
    
    # Load location data from your JSON file
    with open('cit.json') as json_file:
        data = json.load(json_file)
    
    # Filter and return suggestions based on the 'term'
    suggestions = [location for location in data if term.lower() in location.lower()]
    
    return JsonResponse(suggestions, safe=False)




