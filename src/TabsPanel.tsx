"use client";

import { useContext, ComponentPropsWithRef, ReactNode, Activity } from "react";

import { TabsContext } from "./Tabs";

export interface TabsPanelProps extends ComponentPropsWithRef<"div"> {
  tabId: string | number;
  children: ReactNode;
}

export const TabsPanel = ({ tabId, children, ...props }: TabsPanelProps) => {
  const { activeTab } = useContext(TabsContext)!;
  return (
    <Activity mode={activeTab === tabId ? "visible" : "hidden"}>
      <div {...props}>{children}</div>
    </Activity>
  );
};
