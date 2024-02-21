import type { ReactElement } from "react";
import type { CommonComponentProps } from "@/types";

export default function CommonButton({ children }: CommonComponentProps): ReactElement {
  return <>Hey!{children}</>;
}
