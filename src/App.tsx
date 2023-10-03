import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "@/pages/index";

import type { ReactElement } from "react";

export default function BaseApp(): ReactElement {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
