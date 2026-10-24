"use client";

import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanels,
  TabsTab,
} from "@emmgfx/activity-tabs";
import { useEffect, useState } from "react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: "A quick look at the product.",
  },
  { id: "specs", label: "Specs", content: "Sizes, weights and materials." },
  { id: "reviews", label: "Reviews", content: "What buyers are saying." },
];

const tabFromHash = () => {
  const hash = window.location.hash.slice(1);
  return tabs.some((t) => t.id === hash) ? hash : undefined;
};

export const Demo4 = () => {
  const [activeTab, setActiveTab] = useState<string | number | undefined>(
    "overview",
  );

  // URL → tab, on load and when the hash changes (a link, back/forward)
  useEffect(() => {
    const syncFromHash = () => {
      const tab = tabFromHash();
      if (tab) setActiveTab(tab);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Tab → URL, without adding history entries
  const handleChange = (tabId: string | number | undefined) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm">
      <Tabs
        activeTab={activeTab}
        onActiveTabChange={handleChange}
        className="rounded-xl border border-(--color-border) overflow-hidden w-full"
      >
        <TabsList className="flex border-b border-(--color-border)">
          {tabs.map((t) => (
            <TabsTab
              key={t.id}
              tabId={t.id}
              className="flex-1 px-4 py-3 text-sm text-(--color-body) hover:text-(--color-heading) transition-colors border-b-2 border-transparent -mb-px"
              activeClassName="flex-1 px-4 py-3 text-sm font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
            >
              {t.label}
            </TabsTab>
          ))}
        </TabsList>
        <TabsPanels>
          {tabs.map((t) => (
            <TabsPanel
              key={t.id}
              tabId={t.id}
              className="p-5 text-center text-(--color-body)"
            >
              {t.content}
            </TabsPanel>
          ))}
        </TabsPanels>
      </Tabs>
      <code className="text-xs font-mono text-(--color-body)">
        state outside Tabs:{" "}
        <span className="text-(--color-accent)">#{activeTab}</span>
      </code>
    </div>
  );
};
