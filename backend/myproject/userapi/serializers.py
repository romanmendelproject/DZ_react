from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.contrib.auth.models import User
from courses.models import Course, Lesson, Student, Teacher


class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'password2']
        extra_kwargs = {
                'password': {'write_only': True},
        }

    def save(self):
        account = User(
                    username=self.validated_data['username']
                    )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        account.set_password(password)
        account.save()

        return account


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = 'id', 'date_of_birth', 'course'


class UserSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)

    class Meta:
        model = User
        fields = 'id', 'username', 'student'
        