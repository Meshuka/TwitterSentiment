from unicodedata import name
from django.urls import path
from .views import *

urlpatterns = [
    path("search/", search_keywords, name="search"),
    path("model_operation/", model_operation, name="model_operation")
]