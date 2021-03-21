from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
import random

senders_mail = "mail@mail.com"
receivers_mail = "receiver@mail.com"

def sendmail(request):
    ver_code = '1234567890'   
    code = '5'
    for i in range(4):
        code += random.choice(ver_code)

    send_mail(
        'Subject',
        f'Hey. \n \n \n \n'
        
        'You just attempted to reset your password, this attempt requires further verification. \n'
        'To complete the sign in,' 
        'enter the verification code on your device. \n '
        f'Verification code: {code}',
        f'{senders_mail}',
        [f'{receivers_mail}'],
        
        fail_silently=False,
    )
    return HttpResponse('<h1>Please verify </h1>')
