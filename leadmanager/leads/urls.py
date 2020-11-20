from django.db import router
from rest_framework import routers
from rest_framework import urlpatterns
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
