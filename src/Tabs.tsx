"use client";

import {
  createContext,
  useState,
  useContext,
  ComponentPropsWithRef,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export interface TabsContextType {
  activeTab: string | number | undefined;
  setActiveTab: Dispatch<SetStateAction<string | number | undefined>>;
}

export const TabsContext = createContext<TabsContextType | undefined>(
  undefined
);

export interface TabsProps extends ComponentPropsWithRef<"div"> {
  initialActiveTab?: string | number;
  activeTab?: string | number;
  onActiveTabChange?: (tabId: string | number | undefined) => void;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  initialActiveTab,
  activeTab: controlledActiveTab,
  onActiveTabChange,
  children,
  ...props
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<
    string | number | undefined
  >(initialActiveTab);
  // Controlled when the parent passes activeTab, uncontrolled otherwise
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const setActiveTab: Dispatch<SetStateAction<string | number | undefined>> = (
    value
  ) => {
    const nextTab = typeof value === "function" ? value(activeTab) : value;
    if (nextTab === activeTab) return;
    if (!isControlled) setInternalActiveTab(nextTab);
    onActiveTabChange?.(nextTab);
  };

  return (
    <div {...props}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

export const useActiveTab = (): [
  string | number | undefined,
  Dispatch<SetStateAction<string | number | undefined>>
] => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useActiveTab must be used within a Tabs provider");
  }
  return [context.activeTab, context.setActiveTab];
};
