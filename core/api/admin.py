from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, Lession, Topic


admin.site.register(User, UserAdmin)
admin.site.register(Lession)
admin.site.register(Topic)