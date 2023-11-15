from . import views
from django.urls import path
from . import views as user_views
from django.urls import path, reverse_lazy
from django.contrib.auth import views as auth_views
from .views import  *

app_name = "accounts"
urlpatterns = [
    path('register/', register, name='register'),
    path('account_activation_sent/', user_views.account_activation_sent, name='account_activation_sent'),
    path('google-signup/', GoogleSignupView.as_view(), name='google-signup'),
    path('activate/<uidb64>/<token>/', user_views.activate, name='activate'),
    path('login/', auth_views.LoginView.as_view(template_name='main/homepage.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('location-suggestions/', views.location_suggestions, name='location-suggestions'),
    path('password-reset/',
         auth_views.PasswordResetView.as_view(
             template_name='accounts/password_reset.html',
             email_template_name='registration/password_reset_email.html',
             success_url=reverse_lazy('accounts:password_reset_done')  # Note the namespace
         ),
         name='password_reset'),
    path('password-reset/done/',
         auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_done.html'),
         name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/',
        auth_views.PasswordResetConfirmView.as_view(
            template_name='accounts/password_reset_confirm.html',
            success_url=reverse_lazy('accounts:password_reset_complete')
        ),
        name='password_reset_confirm'),

    path('password-reset-complete/',
         auth_views.PasswordResetCompleteView.as_view(template_name='accounts/password_reset_complete.html'),
         name='password_reset_complete'),

    path('profile/', user_views.profile_view, name='profile_view'),

    path('user-profile/<int:user_id>/', user_views.user_profile_view, name='user_profile'),
    

#API
    path('api/register/', UserRegisterView.as_view(), name='user-register-api'),
    path('api/activate/', ActivationView.as_view(), name='activate-api'),
]
