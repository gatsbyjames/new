from django.urls import path
from base.views import order_views as views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, # 커스터마이즈 해서 여기서 임포트 안하고 내 뷰 에서 임포트함
# )

urlpatterns = [
    path('', views.getOrders, name='orders'),
    path('add/', views.addOrderItems, name="orders-add"),
    path('myorders/', views.getMyOrders, name='myorders'),

    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-delivered'),


    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),

]
