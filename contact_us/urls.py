from rest_framework.routers import DefaultRouter
from .views import ContactUsViewSet

router = DefaultRouter()

# add new routes above this line
router.register('', ContactUsViewSet, basename='contact_us')

urlpatterns = []

urlpatterns += router.urls
