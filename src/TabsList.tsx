import { ComponentPropsWithRef, ReactNode } from "react";

export interface TabsListProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
