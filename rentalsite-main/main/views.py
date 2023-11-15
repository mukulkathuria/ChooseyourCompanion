import datetime
from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rentalsite import settings
from .forms import RequestCompanionForm, EmploymentForm
from .models import Profile, FAQ, UserRequest, WalletTransaction, Wallet
from django.contrib.auth.decorators import login_required
from .checksum import generate_checksum
from decimal import Decimal
from rest_framework.views import APIView
from .serializers import *
from rest_framework import generics
from .models import EmploymentForm
from .forms import EmploymentFormModelForm
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


def home(request):
    return render(request, 'main/homepage.html')


def services(request):
    return render(request, 'main/services.html')


@login_required
def request_companion(request):
    if request.method == 'POST':
        form = RequestCompanionForm(request.POST)
        print(form.fields['type_of_companion'].choices)
        if form.is_valid():
            meetup_date = form.cleaned_data['preferred_meetup_date']
            meetup_time = form.cleaned_data['preferred_meetup_time']

            combined_datetime = datetime.datetime.combine(meetup_date, meetup_time)

            user_request = form.save(commit=False)  # Don't save to DB just yet
            user_request.preferred_meetup = combined_datetime
            user_request.user = request.user
            user_request.save()
            messages.success(request, 'Your request has been submitted.')
            return redirect('main:home')
        else:
            messages.warning(request, form.errors)
    else:
        form = RequestCompanionForm()
    return render(request, 'main/request_companion.html', {'form': form})
    


#API View
class CreateRequestCompanion(APIView):
    def get(self, request):
        # Handle GET request to retrieve all objects
        all_requests = UserRequest.objects.all()  # Use the model here
        serializer = UserRequestSerializer(all_requests, many=True)
        return Response(serializer.data)

    def post(self, request):    
        request_serializer = UserRequestSerializer(data=request.data)
        if request_serializer.is_valid():
                request_serializer.save()
                return Response({'message': 'New Request Added!', 'request': request_serializer.data}, status=status.HTTP_201_CREATED)
        return Response(request_serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@login_required
def browse_companions(request):
    companions = Profile.objects.filter(is_companion=True)
    # print(companions, "__________________________\n\n")
    return render(request, 'main/slidder.html')
# views.py

class CompanionListView(generics.ListAPIView):
    serializer_class = CompanionSerializer
    def get_queryset(self):
        user = self.request.user
        # Modify this query to filter profiles with companion information
        return Profile.objects.filter(is_companion=False)
def fetch_data(request):
    return render(request, 'companions/browse.html')



def contact_us(request):
    return render(request, 'main/contactus.html')

def privacy_policy(request):
    return render(request, 'main/privacy.html')


class FAQList(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer



def faq(request):
    return render(request, 'main/faq.html')

def about_us(request):
    return render(request, 'main/about.html')
@login_required(login_url='/')
def employment_form_view(request):
    if EmploymentForm.objects.filter(profile=request.user.profile).exists():
        return redirect('/employment_show/')
    elif request.method == 'POST':
        form = EmploymentFormModelForm(request.POST, request.FILES)
        if form.is_valid():
            profile = request.user.profile
            form.instance.profile = profile
            employment_form = form.save(commit=False)
            # Do any additional processing if needed
            employment_form.save()
            messages.success(request, 'Employment details submitted successfully.')
            return redirect('main:home')
    else:
        form = EmploymentFormModelForm()
    return render(request, 'main/employment.html', {'form': form})





class EmploymentFormListCreateView(APIView):
    # GET request to list all employment forms
    def get(self, request):
        employment_forms = EmploymentForm.objects.all()  # Use get_queryset()
        serializer = EmploymentFormSerializer(employment_forms, many=True)
        return Response(serializer.data)
    # POST request to create a new employment form
    def post(self, request):
        serializer = EmploymentFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Employment form created', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Show employment forms in your template
    def show_emp(request):
        return render(request, 'companions/emo-list.html')


def show_companion_profile(request):
    return render(request, 'companions/companion_profile.html')
class CompanionListAPIView(generics.ListAPIView):
    queryset = Profile.objects.filter(is_companion=True)
    serializer_class = CompanionSerializer



@csrf_exempt
@login_required
def add_funds(request):
    user = request.user
    wallet, _ = Wallet.objects.get_or_create(user=user)

    if request.method == "POST":
        amount = request.POST.get('amount')
        order_id = 'YOUR_ORDER_ID_GENERATION_LOGIC'
        transaction = WalletTransaction(wallet=wallet, amount=amount, order_id=order_id)
        transaction.save()

        data_dict = {
            'MID': settings.PAYTM_MERCHANT_ID,
            'ORDER_ID': order_id,
            'TXN_AMOUNT': str(amount),
            'CUST_ID': 'CUST_ID_{}'.format(user.pk),
            'INDUSTRY_TYPE_ID': 'Retail',
            'WEBSITE': 'WEBSTAGING',  # Change for production
            'CHANNEL_ID': 'WEB',
            'CALLBACK_URL': 'YOUR_CALLBACK_URL',
        }
        data_dict['CHECKSUMHASH'] = generate_checksum(data_dict, settings.PAYTM_MERCHANT_KEY)
        context = {
            'payment_url': 'https://securegw-stage.paytm.in/order/process',
            'data_dict': data_dict
        }
        return render(request, 'main/payment.html', context)
    return render(request, 'main/add_funds.html')


class WalletListCreateView(generics.ListCreateAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer

class WalletTransactionListCreateView(generics.ListCreateAPIView):
    queryset = WalletTransaction.objects.all()
    serializer_class = WalletTransactionSerializer

@csrf_exempt
def payment_callback(request):
    if request.method == "POST":
        form = request.POST
        order_id = form['ORDERID']
        transaction = get_object_or_404(WalletTransaction, order_id=order_id)
        transaction.status = form['STATUS']
        transaction.response_msg = form['RESPMSG']
        transaction.save()

        if form['STATUS'] == 'TXN_SUCCESS':
            wallet = transaction.wallet
            wallet.balance += Decimal(form['TXNAMOUNT'])
            wallet.save()

        return render(request, 'main/payment_status.html', {'response': form})


def show_payment_data(request):
    return render(request, 'main/payment_data.html')

# views.py
class PaymentCallbackAPI(APIView):
    def get(self, request):
        # Get all WalletTransaction objects
        transactions = WalletTransaction.objects.all()
        serializer = WalletTransactionSerializer(transactions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        form = request.data
        order_id = form.get('ORDERID')
        transaction = get_object_or_404(WalletTransaction, order_id=order_id)
        transaction.status = form.get('STATUS')
        transaction.response_msg = form.get('RESPMSG')
        transaction.save()

        if form.get('STATUS') == 'TXN_SUCCESS':
            wallet = transaction.wallet
            wallet.balance += Decimal(form.get('TXNAMOUNT'))
            wallet.save()

        serializer = WalletTransactionSerializer(transaction)
        return Response(serializer.data, status=status.HTTP_200_OK)

