from django.urls import path
from base.views import product_views as views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, # 커스터마이즈 해서 여기서 임포트 안하고 내 뷰 에서 임포트함
# )

urlpatterns = [
    
    path('',views.getProducts, name='products'),
    path('<str:pk>/', views.getProduct, name='product')
]
