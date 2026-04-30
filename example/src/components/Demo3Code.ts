export const demo3code = `
const tabs = [
  { id: "apple", label: "🍎 Apple", content: "Apple is a fruit." },
  { id: "banana", label: "🍌 Banana", content: "Banana is a fruit." },
  { id: "cherry", label: "🍒 Cherry", content: "Cherry is a fruit." },
];

// Custom tab button — uses the hook directly for active styling
const TabButton = ({ tabId, children }) => {
  const [activeTab, setActiveTab] = useActiveTab();
  const isActive = activeTab === tabId;
  return (
    <button onClick={() => setActiveTab(tabId)} className={isActive ? "..." : "..."}>
      {children}
    </button>
  );
};

// External controls — also uses the hook
const ExternalControls = () => {
  const [activeTab, setActiveTab] = useActiveTab();
  const currentIndex = tabs.findIndex((t) => t.id === activeTab);
  return (
    <div>
      <button onClick={() => setActiveTab(tabs[currentIndex - 1].id)} disabled={currentIndex === 0}>
        ← Prev
      </button>
      <span>{currentIndex + 1} / {tabs.length}</span>
      <button onClick={() => setActiveTab(tabs[currentIndex + 1].id)} disabled={currentIndex === tabs.length - 1}>
        Next →
      </button>
    </div>
  );
};

<Tabs initialActiveTab="apple">
  <TabsList>
    {tabs.map((t) => (
      <TabButton key={t.id} tabId={t.id}>{t.label}</TabButton>
    ))}
  </TabsList>
  <TabsPanels>
    {tabs.map((t) => (
      <TabsPanel key={t.id} tabId={t.id}>{t.content}</TabsPanel>
    ))}
  </TabsPanels>
  <ExternalControls />
</Tabs>
`.trim();
