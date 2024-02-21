import type { ReactNode } from "react";
import type { Theme } from "./index.ts";

export interface CommonComponentProps {
  children?: ReactNode;
}

export interface ThemeProviderProps {
  storageKey?: string;
  children: ReactNode;
  defaultTheme?: Theme;
}
