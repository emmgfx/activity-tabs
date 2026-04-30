import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "@emmgfx/activity-tabs";

export const Tabs = (props: React.ComponentProps<typeof RATabs>) => (
  <RATabs
    className="rounded-xl border border-(--color-border) overflow-hidden w-full max-w-sm"
    {...props}
  />
);

export const TabsList = (props: React.ComponentProps<typeof RATabsList>) => (
  <RATabsList className="flex border-b border-(--color-border)" {...props} />
);

export const TabsTab = (props: React.ComponentProps<typeof RATabsTab>) => (
  <RATabsTab
    className="flex-1 px-4 py-3 text-sm text-(--color-body) hover:text-(--color-heading) transition-colors border-b-2 border-transparent -mb-px"
    activeClassName="flex-1 px-4 py-3 text-sm font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
    {...props}
  />
);

export const TabsPanels = (
  props: React.ComponentProps<typeof RATabsPanels>,
) => <RATabsPanels {...props} />;

export const TabsPanel = (props: React.ComponentProps<typeof RATabsPanel>) => (
  <RATabsPanel className="p-5" {...props} />
);
