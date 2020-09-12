from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('result/', TemplateView.as_view(template_name='index.html')),
    path('logout/', TemplateView.as_view(template_name='index.html'))
    # path('', TemplateView.as_view(template_name='index.html'))
]
