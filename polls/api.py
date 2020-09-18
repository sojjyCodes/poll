from polls.models import Poll
from rest_framework import viewsets, permissions
from .serializers import PollSerializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

serializers_class = PollSerializer