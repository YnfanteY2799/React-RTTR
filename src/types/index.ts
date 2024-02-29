import type { QueryKey } from "@tanstack/react-query";

/* Only exportables*/
export * from "./components";
export * from "./forms";

/** Default Handled Theme Type */
export type Theme = "dark" | "light" | "system";

/** Type Provider State */
export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

/** Fetch interceptor parameter data type */
export type FetchTypeData = {
  body?: any;
  uri: string;
  hasAuth?: boolean;
  extra?: ResponseInit;
  requestCredencials?: RequestCredentials;
  extraHeaders?: Array<{ [key: string]: string }>;
  httpMethod: "PUT" | "PATCH" | "DELETE" | "POST" | "GET";
};

/**
 * Generic Paginated Api Response => GPAP,
 * This is the Basic And Generic Structure to recive From connected Backend Paginated Endpoints
 */
export interface IGPAP<G> {
  data: Array<G>;
  metadata: {
    prev: number;
    next: number;
    total: number;
    totalPages: number;
    totalPerPage: number;
    currentCursor: number;
    totalRegisters: number;
  };
}

export type usePaginationParamProps = {
  arrProp?: string;
  queryKey: QueryKey;
  queryCaller: Function;
  extraFn?: [Function, string];
};

/**  TIncType => Syntax Sugar for better redability Inc => Inclussive */
export type TIncType<G> = Promise<G | undefined>;

export type ErrorObj = {
  code?: number;
  message?: string;
};

export type TAsyncIncResolver<G> = Promise<[G | undefined, ErrorObj | undefined]>;

/** Type Single Message Response */
export type TSMR = {
  message: string;
};
