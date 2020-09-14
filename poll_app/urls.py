from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import home, sendmail
urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include('polls.urls')),
    path('result/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('verify/', sendmail, name='sendmail'),
    path('admin/', admin.site.urls),
    
]
