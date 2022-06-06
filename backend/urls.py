from django.contrib import admin
from django.urls import include, path

from django.conf import settings
# 얘가 장고 설정에서 세팅
from django.conf.urls.static import static
# 얘가 장고 설정에서 URL 의 Static 세팅

urlpatterns = [


    path('admin/', admin.site.urls),
    path('api/products/',include('base.urls.product_urls')),
    path('api/users/',include('base.urls.user_urls')),
    path('api/orders/',include('base.urls.order_urls'))
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# 얘가 urlpatterns 에 static 세팅 하는 코드