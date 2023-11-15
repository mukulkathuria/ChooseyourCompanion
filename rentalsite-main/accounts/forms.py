from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from main.models import Profile





from django import forms




from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core.validators import RegexValidator  # Import RegexValidator
from django.core.exceptions import ValidationError

# ...

# class UserRegisterForm(UserCreationForm):
#     email = forms.EmailField()
#     phone = forms.CharField(max_length=15)
#     location = forms.CharField(required=False)
#     age = forms.IntegerField()

#     class Meta:
#         model = User
#         fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2', 'phone', 'location', 'age']

#     def clean(self):
#         cleaned_data = super().clean()
#         password1 = cleaned_data.get("password1")
#         password2 = cleaned_data.get("password2")
        
#         if password1 and password2 and password1 != password2:
#             raise ValidationError("Passwords do not match.")
#         return cleaned_data
class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    phone = forms.CharField(max_length=15)
    location = forms.CharField(required=False)
    age = forms.IntegerField()
    user_type = forms.ChoiceField(choices=[('user', 'User'), ('companion', 'Companion')], widget=forms.RadioSelect)
    # Companion-specific fields
    height = forms.IntegerField(required=False)
    languages = forms.CharField(required=False)
    what_makes = forms.CharField(required=False)
    employment_history = forms.CharField(required=False)
    educational_background = forms.CharField(required=False)
    skills = forms.CharField(required=False)
    expected_salary = forms.DecimalField(required=False)
    availability_date = forms.DateField(required=False)
    cover_letter = forms.CharField(required=False)
    photo_face = forms.ImageField(required=False)
    photo_body = forms.ImageField(required=False)
    accepted = forms.BooleanField(required=False)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2', 'phone', 'location', 'age', 'user_type', 'height', 'languages', 'what_makes', 'employment_history', 'educational_background', 'skills', 'expected_salary', 'availability_date', 'cover_letter', 'photo_face', 'photo_body', 'accepted']

    def clean(self):
        cleaned_data = super().clean()
        password1 = cleaned_data.get("password1")
        password2 = cleaned_data.get("password2")
        user_type = cleaned_data.get("user_type")

        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords do not match.")

        if user_type == 'companion':
            # Validate that all companion-specific fields are filled
            companion_fields = ['height', 'languages', 'what_makes', 'employment_history', 'educational_background', 'skills', 'expected_salary', 'availability_date', 'cover_letter', 'photo_face', 'photo_body', 'accepted']
            for field_name in companion_fields:
                if not cleaned_data.get(field_name):
                    self.add_error(field_name, f'This field is required for companions.')

        return cleaned_data


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        exclude = ('user',)
        fields = "__all__"
