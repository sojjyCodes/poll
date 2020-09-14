from rest_framework import routers
from .api import PollViewSet

router = routers.DefaultRouter()
router.register('api/poll/', PollViewSet, 'poll')

urlpatterns = router.urls