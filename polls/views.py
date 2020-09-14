from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail

def sendmail(request):

    send_mail(
        'Subject',
        'Hey You. \n'
        'You just attempted to reset your password, this attempt requires further verification. \n'
        'To complete the sign in,' 
        'enter the verification code on your device. \n '
        'Verification code: 609147',
        'from@example.com',
        ['to@example.com'],
        fail_silently=False,
    )

    return HttpResponse()