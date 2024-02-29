import loadable from "@loadable/component";

import type { RouteObject } from "react-router-dom";

/* Imports Pages */

const HomePage = loadable(() => import("./Home/index.tsx"));

/* Imports Pages */

const PUBLIC_ROUTES: Array<RouteObject> = [{ path: "/", element: <HomePage /> }];

export const TOTAL_APP_ROUTES: Array<RouteObject> = [...PUBLIC_ROUTES];
