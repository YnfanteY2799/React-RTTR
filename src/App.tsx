import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { TOTAL_APP_ROUTES } from "@/pages/index";
import { ThemeProvider } from "@/providers";
import { Toaster } from "sonner";

import type { ReactElement } from "react";

export default function BaseApp(): ReactElement {
  const router = createBrowserRouter(TOTAL_APP_ROUTES);

  // React Query Config
  const qClient = new QueryClient({
    defaultOptions: { queries: { refetchInterval: 1800000, refetchOnWindowFocus: false, retryDelay: 15000 } },
  });

  return (
    <NextUIProvider>
      <ThemeProvider>
        <QueryClientProvider client={qClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster position="bottom-right" closeButton richColors />
      </ThemeProvider>
    </NextUIProvider>
  );
}
