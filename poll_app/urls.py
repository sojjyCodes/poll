from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from polls.views import sendmail
urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('result/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('', include('polls.urls')),
    path('verify/', sendmail, name='sendmail'),
    path('admin/', admin.site.urls),
    
]
