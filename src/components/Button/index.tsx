import type { ReactElement } from "react";
import type { CommonComponentProps } from "@/types";

export default function CommonButton({ children }: CommonComponentProps): ReactElement {
  return <div className="text-center text-blue-500">Hey!{children}</div>;
}
