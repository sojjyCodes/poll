from rest_framework import routers
from .api import PollViewSet

router = routers.DefaultRouter()
router.register('api/leads/', PollViewSet, 'polls')

urlpatterns = router.urls