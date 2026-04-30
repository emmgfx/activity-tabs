import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "@emmgfx/activity-tabs";

export const CodeTabs = (props: React.ComponentProps<typeof RATabs>) => (
  <RATabs {...props} />
);

export const CodeTabsList = (
  props: React.ComponentProps<typeof RATabsList>,
) => (
  <RATabsList
    className="flex border-b border-(--color-border) bg-(--color-surface)"
    {...props}
  />
);

export const CodeTabsTab = (props: React.ComponentProps<typeof RATabsTab>) => (
  <RATabsTab
    className="px-4 py-2 text-xs text-(--color-body) hover:text-(--color-heading) transition-colors border-b-2 border-transparent -mb-px"
    activeClassName="px-4 py-2 text-xs text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
    {...props}
  />
);

export const CodeTabsPanels = (
  props: React.ComponentProps<typeof RATabsPanels>,
) => <RATabsPanels {...props} />;

export const CodeTabsPanel = (
  props: React.ComponentProps<typeof RATabsPanel>,
) => <RATabsPanel {...props} />;
