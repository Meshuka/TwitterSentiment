from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
    path('api/', include('app_api.urls')),
    path('api/user/', include('users.urls')),
    # path('api-auth/', include('rest_framework.urls')),
]
