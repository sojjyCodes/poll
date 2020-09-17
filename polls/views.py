from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
import random

ver_code = '1234567890'
number = 1
length = 5

senders_mail = "mail@mail.com"
receivers_mail = "receiver@mail.com"

def sendmail(request):



    send_mail(
        'Subject',
        f'Hey {name}. \n'
        'You just attempted to reset your password, this attempt requires further verification. \n'
        'To complete the sign in,' 
        'enter the verification code on your device. \n '
        f'Verification code: {code}',
        f'{senders_mail}',
        [f'{receivers_mail}'],
        
        fail_silently=False,
    )
    return HttpResponse('<h1>Please verify </h1>')




ver_code = '1234567890'
number = 1
length = 5

for p in range(number):
    password = ''
for code in range(length):
    password += random.choice(ver_code)
    print(password)