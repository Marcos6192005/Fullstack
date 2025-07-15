from rest_framework import viewsets
from .serializer import billserializer
from .models import bill

# Create your views here.
class billViewSet(viewsets.ModelViewSet):
    queryset = bill.objects.all()
    serializer_class = billserializer