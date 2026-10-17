"use client";

import { ReactNode } from "react";

import { useActiveTab } from "./Tabs";

export interface TabsTabProps {
  tabId: string | number;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

export const TabsTab: React.FC<TabsTabProps> = ({
  tabId,
  className,
  activeClassName,
  children,
}) => {
  const [activeTab, setActiveTab] = useActiveTab();
  const isActive = activeTab === tabId;
  return (
    <button
      type="button"
      className={isActive && activeClassName ? activeClassName : className}
      onClick={() => setActiveTab(tabId)}
    >
      {children}
    </button>
  );
};
