from rest_framework import serializers
from .models import bill

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = bill
        fields = '__all__'