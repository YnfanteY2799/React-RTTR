import Cookies from "universal-cookie";
import { HOST } from "./index";

import type { FetchTypeData, TAsyncIncResolver } from "@/types";

export function GetHost() {
  return HOST;
}

/**
 * Fetch interceptor
 * @param data Dynamic Data type check notation type @type FetchTypeData
 * @returns Intercepted Fetch
 */
export async function appFetch<G>({ httpMethod = "GET", ...data }: FetchTypeData): TAsyncIncResolver<G> {
  try {
    const jjwt: string = new Cookies().get("auth-cookie");
    const secureHeaderCookie = new Headers();
    data.hasAuth && secureHeaderCookie.append("Authorization", `Bearer ${jjwt}`);

    if (data.extraHeaders) {
      data.extraHeaders.flatMap((x) => {
        for (const key in x) secureHeaderCookie.append(key, x[key]);
      });
    }

    const call = await fetch(
      HOST + data.uri,
      httpMethod === "GET"
        ? { headers: secureHeaderCookie, credentials: data.requestCredencials }
        : {
            method: httpMethod,
            body: data.body,
            headers: secureHeaderCookie,
            credentials: data.requestCredencials,
          }
    );

    if (call.status >= 200 && call.status < 300) return [(await call.json()) as G, undefined];
    else {
      const errorObj = await call.json();
      const message = errorObj.error && errorObj.error.message ? errorObj.error.message : errorObj.message;
      const code = errorObj.error && errorObj.error.status ? errorObj.error.status : errorObj.statusCode;
      return [undefined, { message, code }];
    }
  } catch (fetchErrorDescription) {
    console.log({ fetchErrorDescription });
    return [undefined, { message: "Conexión Interrumpida", code: 900 }];
  }
}

/**
 * Custom Group by Function due to ECMAES Limitations
 * @param arr Array to be filtered ( Generic )
 * @param key String of key to group By
 * @returns Array Grouped by selected Property
 */
export function groupBy<T, K extends keyof any>(arr: T[], key: (i: T) => K) {
  return arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

/**
 * Random UUID 4 Space Sized Generator
 * @returns Random UUID 4 space Sized
 */
export function uuidv4Size4(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (parseInt(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c) / 4)))).toString(16)
  );
}

/**
 * Function for common Price Number Formatting
 * @param {number} num Price To be Formatted
 * @returns {string}
 */
export function commonPrice(num: number | string = 0): string {
  const ntf = isNaN(+num) || num === "" ? 0 : typeof num === "string" ? parseFloat(num) : num;
  return new Intl.NumberFormat("en-US", {
    currencySign: "standard",
    style: "currency",
    currency: "USD",
  }).format(ntf ?? 0);
}
