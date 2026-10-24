import { ComponentPropsWithRef, ReactNode } from "react";

export interface TabsPanelsProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
}

export const TabsPanels = ({ children, ...props }: TabsPanelsProps) => {
  return <div {...props}>{children}</div>;
};
