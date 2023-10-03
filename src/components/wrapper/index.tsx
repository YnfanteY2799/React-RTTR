import type { ReactElement } from "react";
import type { CommonComponentProps } from "@/types";

export default function PageWrapper({ children }: CommonComponentProps): ReactElement {
  return <>Hey!{children}</>;
}
