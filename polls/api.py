from polls.models import Poll
from rest_framework import viewsets, permissions
from .serializers import PollSerializer

class PollViewSet(viewsets.ModelViewSet):
    queryset = Poll.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

serializers_class = PollSerializer