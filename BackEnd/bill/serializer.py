from rest_framework import serializers
from .models import bill

class billserializer(serializers.ModelSerializer):
    class Meta:
        model = bill
        fields = '__all__'