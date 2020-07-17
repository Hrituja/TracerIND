from django.contrib import admin
from django.urls import path, include
from api import urls as API
from . import views

#CRUD Functionality First, API For ANDROID Next and then API for GettingData and Filtering Data

urlpatterns = [
    path('',views.APIView,name = "APIList"), 
    path('parseVillage/',views.parseVillage,name = "parseVillage"),
    path('parseVillageSec/',views.parseVillageSec,name = "parseVillageSec"),
    path('addmandal/',views.addmandal,name = "addmandal"),
    path('addphc/',views.addphc,name = "addphc"),
    path('AddPatient/',views.AddPatient,name = "AddPatient"),
    path('DeletePatient/',views.DeletePatient,name = "DeletePatient"),
    path('UpdatePatient/',views.UpdatePatient,name = "UpdatePatient"),
    path('GetPatient/',views.GetPatient,name = "GetPatient"),
    path('GetAllPatient/',views.GetAllPatient,name = "GetAllPatient"),
    path('GetPHCData/',views.GetPHCData,name = "GetPHCData"),
    path('GetVillageSecData/',views.GetVillageSecData,name = "GetVillageSecData"),
    path('GetVillageData/',views.GetVillageData,name = "GetVillageData"),
    path('GetPatientData_Village/',views.GetPatientData_Village,name = "GetPatientData_Village"),
     path('GetVIllageNames/',views.GetVIllageNames,name = "GetVIllageNames"),
    #ANDROID API
    path('DroidDump/',views.DroidDump,name = "DroidDump"),

]