from django.urls import path
from base.views import user_views as views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, # 커스터마이즈 해서 여기서 임포트 안하고 내 뷰 에서 임포트함
# )

urlpatterns = [
    
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # 얘 그냥 초기 상태 /api/token 이때도 요구하는게 유저네임하고 패스워드임
    # 커스터마이즈 할 떄는 views. 붙여야함
    path('register/', views.registerUser, name='register'),

    path('profile/', views.getUserProfile, name="user-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('', views.getUsers, name="users"),

    path('<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'),
    
    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),

]
