"use client";

import { ComponentPropsWithRef, ReactNode } from "react";

import { useActiveTab } from "./Tabs";

export interface TabsTabProps
  extends Omit<ComponentPropsWithRef<"button">, "type"> {
  tabId: string | number;
  activeClassName?: string;
  children: ReactNode;
}

export const TabsTab: React.FC<TabsTabProps> = ({
  tabId,
  className,
  activeClassName,
  onClick,
  children,
  ...props
}) => {
  const [activeTab, setActiveTab] = useActiveTab();
  const isActive = activeTab === tabId;
  return (
    <button
      {...props}
      type="button"
      className={isActive && activeClassName ? activeClassName : className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setActiveTab(tabId);
      }}
    >
      {children}
    </button>
  );
};
