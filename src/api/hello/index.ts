import { appFetch } from "@/utils";

import type { IGPAP, TIncType } from "@/types";

export async function getAllAreas(csr?: number): TIncType<IGPAP<any>> {
  const [response, error] = await appFetch<IGPAP<any>>({
    httpMethod: "GET",
    uri: `Areas/Get?currPage=${csr}$`,
  });
  if (error) throw new Error(error.message);
  return response;
}
