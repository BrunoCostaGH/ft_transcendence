from rest_framework.routers import Route, DynamicRoute, DefaultRouter


class APIRouter(DefaultRouter):
    # DRF Default Routes
    routes = [
        # List route.
        Route(
            url=r"^{prefix}$",
            mapping={
                "get": "list",
                "post": "create"
            },
            name="{basename}-list",
            detail=False,
            initkwargs={"suffix": "List"}
        ),
        # Dynamically generated list routes. Generated using
        # @action(detail=False) decorator on methods of the viewset.
        DynamicRoute(
            url=r"^{prefix}/{url_path}$",
            name="{basename}-{url_name}",
            detail=False,
            initkwargs={}
        ),
        # Detail route.
        Route(
            url=r"^{prefix}/{lookup}$",
            mapping={
                "get": "retrieve",
                "put": "update",
                "patch": "partial_update",
                "delete": "destroy"
            },
            name="{basename}-detail",
            detail=True,
            initkwargs={"suffix": "Instance"}
        ),
        # Dynamically generated detail routes. Generated using
        # @action(detail=True) decorator on methods of the viewset.
        DynamicRoute(
            url=r"^{prefix}/{lookup}/{url_path}$",
            name="{basename}-{url_name}",
            detail=True,
            initkwargs={}
        )
    ]

    # User-defined routes
    routes += [
        # List route.
        Route(
            url=r"^{prefix}/{lookup}/callback$",
            mapping={
                "get": "callback"
            },
            name="{basename}-callback",
            detail=True,
            initkwargs={}
        ),
        # Dynamically generated list routes. Generated using
        # @action(detail=False) decorator on methods of the viewset.
        DynamicRoute(
            url=r"^{prefix}/{lookup}/callback/{url_path}$",
            name="{basename}-{url_name}",
            detail=True,
            initkwargs={}
        ),
        # List route.
        Route(
            url=r"^users/{lookup}/otp$",
            mapping={
                "get": "retrieve",
                "post": "create",
                "delete": "destroy",
            },
            name="{basename}-otp",
            detail=True,
            initkwargs={}
        )
    ]
