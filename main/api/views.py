from django.http.response import HttpResponse
from django.shortcuts import render
from datetime import datetime
from django.views.decorators.csrf import csrf_protect
import json
import pyrebase

config = {
    "apiKey": "AIzaSyCjmtfb4sZ4jG6XXPjgGOEFU-F71-83DOA",
    "authDomain": "teleif.firebaseapp.com",
    "databaseURL": "https://teleif-default-rtdb.firebaseio.com",
    "projectId": "teleif",
    "storageBucket": "teleif.appspot.com",
    "messagingSenderId": "554271179375",
    "appId": "1:554271179375:web:31b09a22bdd0e21fcf039a"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
database = firebase.database()

def index(request):
    return render(request, 'index.html', {})

@csrf_protect
def post_message(request):
    contents = {}

    if request.method == 'POST':
        contents["body"] = request.POST.get('msg-body')
        contents["created_at"] = f'{datetime.now():%Y-%m-%d %H:%M:%S%z}'
        database.child("Message").push(contents)

    return render(request, 'index.html', {})