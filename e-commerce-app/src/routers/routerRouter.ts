import createRouter, { Router } from "router5";
import browserPlugin from "router5-plugin-browser";
import protectRouterMiddleware from "@middleware/protectRouterMiddleware";
import { RouteNames, RoutePaths } from "@enums/routesEnum";

const routes = [
  { name: RouteNames.Login, path: RoutePaths[RouteNames.Login] },
  { name: RouteNames.Register, path: RoutePaths[RouteNames.Register] },
  { name: RouteNames.Products, path: RoutePaths[RouteNames.Products] },
];

const router: Router = createRouter(routes, {
  defaultRoute: RouteNames.Products,
  rewritePathOnMatch: true,
});

router.usePlugin(browserPlugin());
router.useMiddleware(protectRouterMiddleware);

router.start();

export default router;
