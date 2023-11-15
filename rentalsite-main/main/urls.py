from django.urls import path
from . import views
from .views import *
from django.urls import path


app_name = "main"

urlpatterns = [
    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('request-companion/', views.request_companion, name='request_companion'),
    path('browse-companions/', views.browse_companions, name='browse_companions'),
    path('contact-us/', views.contact_us, name='contact_us'),
    path('faq/', views.faq, name='faq'),
    path('about-us/', views.about_us, name='about_us'),
    path('privacy-policy/', views.privacy_policy, name='privacy'),
    path('employment_show/', EmploymentFormListCreateView.show_emp, name='employment_show'),
    
    path('employment-form/', views.employment_form_view, name='employment_form'),
    
    path('companion-profile/', show_companion_profile, name='show-companion-profile'),
    path('payment-data/', show_payment_data, name='payment-data'),
    path('add_funds/', views.add_funds, name='add_funds'),
    path('payment_callback/', views.payment_callback, name='payment_callback'),
    path('search_user/', views.fetch_data, name='fetch-companion-data'),
    
    
    # API view
    path('api/create_request_companion/', views.CreateRequestCompanion.as_view(), name='api_create_request_companion'),
    #path('api/employment-form/', EmploymentFormListCreateView.as_view(), name='employment-form-list-create'),
    path('api/wallet/', WalletListCreateView.as_view(), name='wallet-list-create'),
    path('api/transaction/', WalletTransactionListCreateView.as_view(), name='transaction-list-create'),
    path('api/employment-form/', EmploymentFormListCreateView.as_view(), name='employment-form-api'),
    path('api/companions/', views.CompanionListView.as_view(), name='companions-list'),
    
    path('api/payment-callback/', views.PaymentCallbackAPI.as_view(), name='payment-callback-api'),
    
    path('api/faqs/', views.FAQList.as_view(), name='faq-list'),
    path('api/companion-list/', CompanionListAPIView.as_view(), name='companion-list'),

]
