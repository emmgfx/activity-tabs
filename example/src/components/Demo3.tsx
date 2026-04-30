"use client";

import {
  Tabs,
  TabsList,
  TabsPanels,
  TabsPanel,
  useActiveTab,
} from "@emmgfx/activity-tabs";

const tabs = [
  { id: "apple", label: "🍎 Apple", content: "Apple is a fruit." },
  { id: "banana", label: "🍌 Banana", content: "Banana is a fruit." },
  { id: "cherry", label: "🍒 Cherry", content: "Cherry is a fruit." },
];

const TabButton = ({
  tabId,
  children,
}: {
  tabId: string;
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useActiveTab();
  const isActive = activeTab === tabId;
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex-1 px-4 py-3 text-sm transition-colors ${
        isActive
          ? "font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
          : "text-(--color-body) hover:text-(--color-heading) border-b-2 border-transparent -mb-px"
      }`}
    >
      {children}
    </button>
  );
};

const ExternalControls = () => {
  const [activeTab, setActiveTab] = useActiveTab();
  const currentIndex = tabs.findIndex((t) => t.id === activeTab);

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-(--color-border)">
      <button
        onClick={() => setActiveTab(tabs[currentIndex - 1].id)}
        disabled={currentIndex === 0}
        className="px-3 py-1.5 rounded-lg border border-(--color-border) text-sm text-(--color-heading) hover:bg-(--color-surface) transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        ← Prev
      </button>
      <span className="text-xs text-(--color-body) tabular-nums">
        {currentIndex + 1} / {tabs.length}
      </span>
      <button
        onClick={() => setActiveTab(tabs[currentIndex + 1].id)}
        disabled={currentIndex === tabs.length - 1}
        className="px-3 py-1.5 rounded-lg border border-(--color-border) text-sm text-(--color-heading) hover:bg-(--color-surface) transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next →
      </button>
    </div>
  );
};

export const Demo3 = () => {
  return (
    <Tabs
      initialActiveTab="apple"
      className="rounded-xl border border-(--color-border) overflow-hidden w-full max-w-sm"
    >
      <TabsList className="flex border-b border-(--color-border)">
        {tabs.map((t) => (
          <TabButton key={t.id} tabId={t.id}>
            {t.label}
          </TabButton>
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
      <ExternalControls />
    </Tabs>
  );
};
