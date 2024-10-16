import { State } from "router5";
import { RouteNames } from "@enums/routesEnum";
import useAuthStore from "@store/authStore";
import { DoneFn } from "router5/dist/types/base";

const protectRouterMiddleware =
  () => (toState: State, fromState: State, done: DoneFn) => {
    const authToken = useAuthStore.getState().accessToken;

    const publicRoutes: RouteNames[] = [RouteNames.Login, RouteNames.Register];

    if (!authToken && !publicRoutes.includes(toState.name as RouteNames)) {
      done({
        redirect: {
          name: RouteNames.Login,
          params: { redirect: toState.path },
        },
      });
    } else {
      done(null);
    }

    useAuthStore.getState().forceRenderUpdate();
  };

export default protectRouterMiddleware;
