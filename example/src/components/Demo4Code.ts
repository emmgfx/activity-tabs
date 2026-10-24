export const demo4code = `
const [activeTab, setActiveTab] = useState("overview");

// URL → tab, on load and when the hash changes (a link, back/forward)
useEffect(() => {
  const syncFromHash = () => {
    const hash = window.location.hash.slice(1);
    if (tabs.some((t) => t.id === hash)) setActiveTab(hash);
  };
  syncFromHash();
  window.addEventListener("hashchange", syncFromHash);
  return () => window.removeEventListener("hashchange", syncFromHash);
}, []);

// Tab → URL, without adding history entries
const handleChange = (tabId) => {
  setActiveTab(tabId);
  window.history.replaceState(null, "", \`#\${tabId}\`);
};

<Tabs activeTab={activeTab} onActiveTabChange={handleChange}>
  <TabsList>
    {tabs.map((t) => (
      <TabsTab key={t.id} tabId={t.id} className="..." activeClassName="...">
        {t.label}
      </TabsTab>
    ))}
  </TabsList>
  <TabsPanels>
    {tabs.map((t) => (
      <TabsPanel key={t.id} tabId={t.id}>{t.content}</TabsPanel>
    ))}
  </TabsPanels>
</Tabs>
`.trim();
