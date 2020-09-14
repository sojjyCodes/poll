from polls.models import Poll
from rest_framework import viewsets, permissions
from .serializers import PollSerializers

class PollViewSet(viewsets.ModelViewSet):
    queryset = Poll.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

serializers_class = PollSerializers