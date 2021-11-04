from django.contrib import admin
from django.urls import path
from django.conf.urls import include, re_path
from .api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.post_message, name='post'),
    path('', views.index, name = 'index'),
]
