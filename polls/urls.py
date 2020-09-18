from rest_framework import routers
from .api import PollViewSet

router = routers.DefaultRouter()
router.register('polls', PollViewSet, 'poll')

urlpatterns = router.urls