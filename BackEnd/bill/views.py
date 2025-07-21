from rest_framework import viewsets
from .serializer import BillSerializer
from .models import bill

# Create your views here.
class billViewSet(viewsets.ModelViewSet):
    queryset = bill.objects.all()
    serializer_class = BillSerializer