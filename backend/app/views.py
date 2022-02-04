from urllib import response
from django.shortcuts import render, redirect
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.urls import reverse

# Create your views here.

@api_view(['GET',])
@permission_classes((IsAuthenticated,))
def index(request):
    return JsonResponse({
        "data":"Hello from app"
    })


@api_view(["POST",])
def search_keywords(request):
    user = request.user
    user.is_registered = True
    user.save()
    print('after providing searh fields', user)
    data ={}

    print(request.data)
    data["product_name"] = request.data['product_name']
    data["company_name"] = request.data['company_name']
    data["keywords"] = request.data['keywords']

    print(data)
    return redirect(reverse('app:view'))
    # return Response({
    #     "msg": "From search",
    #     "is_registered": user.is_registered,
    #     "data": data
    # })


@api_view(["POST","GET",])
def model_operation(request):
    return Response({
        "data":"done"
    })