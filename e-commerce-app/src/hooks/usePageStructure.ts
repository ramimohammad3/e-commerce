import { useRoute } from "react-router5";
import ForbiddenPage from "@pages/forbidden/ForbiddenPage";
import LoaderPage from "@pages/loader/LoaderPage";
import { RouteNames } from "@enums/routesEnum";
import pageRoutes from "@routers/pageRouter";
import AuthLayout from "layout/auth/AuthLayout";
import useAuthStore from "@store/authStore";
import router from "@routers/routerRouter";

export const usePageStructure = () => {
  const _ = useAuthStore((state) => state.forceRender);
  const result = router.getState();

  if (!result?.name) {
    return { Layout: AuthLayout, Page: LoaderPage };
  }

  const routeName = result.name as RouteNames;

  const pageRoute = pageRoutes[routeName];

  if (!pageRoute) {
    return { Layout: AuthLayout, Page: ForbiddenPage };
  }

  if (pageRoute.isAuthPage) {
    return { Layout: AuthLayout, Page: pageRoute.Page };
  }

  return pageRoute;
};
