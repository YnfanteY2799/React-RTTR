/* Only exportables*/
export * from "./components";
export * from "./forms";
/* */

/**
 * Fetch interceptor parameter data type
 */
export type FetchTypeData =
  & {
    uri: string;
    extra?: ResponseInit;
    hasAuth?: boolean;
    extraHeaders?: Array<{ [key: string]: string }>;
    requestCredencials?: RequestCredentials;
    autoAnswer?: boolean;
  }
  & ({ httpMethod: "GET" } | {
    httpMethod:
      | "PUT"
      | "PATCH"
      | "DELETE"
      | "POST";
    body: any;
  });
