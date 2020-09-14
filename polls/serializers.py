from rest_framework import serializers
from polls.models import Poll

class PollSerializers(serializers.ModelSerializer):
    class meta:
        model = Poll
        fields = '__all__'