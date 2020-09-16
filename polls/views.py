from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
import random


def sendmail(request):

    ver_code = '1234567890'
    number = 1
    length = 5

    for p in range(number):
        password = ''
    for code in range(length):
        password += random.choice(ver_code)
        print(password)

    send_mail(
        'Subject',
        'Hey You. \n'
        'You just attempted to reset your password, this attempt requires further verification. \n'
        'To complete the sign in,' 
        'enter the verification code on your device. \n '
        f'Verification code: {code}',
        'sojjy.mail-6507d0@inbox.mailtrap.io',
        ['to@example.com'],
        fail_silently=False,
    )
    return HttpResponse('<h1>Please verify </h1>')