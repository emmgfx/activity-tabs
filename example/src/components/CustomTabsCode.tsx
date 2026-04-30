import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "@emmgfx/activity-tabs";

export const CodeTabs = (props: React.ComponentProps<typeof RATabs>) => (
  <RATabs className="" {...props} />
);

export const CodeTabsList = (
  props: React.ComponentProps<typeof RATabsList>,
) => (
  <RATabsList className="border-b border-slate-600 bg-slate-700" {...props} />
);

export const CodeTabsTab = (props: React.ComponentProps<typeof RATabsTab>) => (
  <RATabsTab
    className="bg-slate-700 px-4 py-2 text-xs text-slate-100"
    activeClassName="bg-slate-800 text-slate-100 text-xs px-4 py-2 shadow-[0_1px_0_0] shadow-orange-500"
    {...props}
  />
);

export const CodeTabsPanels = (
  props: React.ComponentProps<typeof RATabsPanels>,
) => <RATabsPanels className="" {...props} />;

export const CodeTabsPanel = (
  props: React.ComponentProps<typeof RATabsPanel>,
) => <RATabsPanel className="" {...props} />;
