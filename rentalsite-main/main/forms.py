from django import forms
from .models import UserRequest
from .models import EmploymentForm

class RequestCompanionForm(forms.ModelForm):
    preferred_meetup_date = forms.DateField(
        label="Preferred Meetup Date",
        widget=forms.DateInput(
            attrs={'class': 'form-control', 'type': 'date'},
            format='%Y-%m-%d'
        )
    )
    preferred_meetup_time = forms.TimeField(
        label="Preferred Meetup Time",
        widget=forms.TimeInput(
            attrs={'class': 'form-control', 'type': 'time'},
            format='%H:%M'
        )
    )
    type_of_companion = forms.ChoiceField(choices=UserRequest.CHOICES, widget=forms.Select(attrs={'class': 'form-control'}))
    other_requirements = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control'}))

    class Meta:
        model = UserRequest
        fields = ['preferred_meetup_date', 'preferred_meetup_time', 'type_of_companion', 'other_requirements']




class EmploymentFormModelForm(forms.ModelForm):
    class Meta:
        model = EmploymentForm
        fields = ['age', 'height', 'languages', 'what_makes', 'employment_history', 'educational_background', 'skills', 'expected_salary', 'availability_date', 'cover_letter', 'photo_face', 'photo_body', 'accepted']
        labels = {
            'age': 'Age',
            'height': 'Height',
            'languages': 'Languages',
            'what_makes': 'What makes you a good girlfriend?',
            'employment_history': 'Employment History',
            'educational_background': 'Educational Background',
            'skills': 'Skills',
            'expected_salary': 'Expected Salary',
            'availability_date': 'Availability Date',
            'cover_letter': 'Cover Letter',
            'photo_face': 'Face Photo',
            'photo_body': 'Body Photo',
            'accepted': 'Accepted',
        }
