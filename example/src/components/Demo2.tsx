import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@/components/CustomTabs";

import { Counter } from "@/components/Counter";

export const demo2code1 = `
<Tabs initialActiveTab="counter1">
  <TabsList>
    <TabsTab tabId="counter1">First counter</TabsTab>
    <TabsTab tabId="counter2">Second counter</TabsTab>
  </TabsList>
  <TabsPanels>
    <TabsPanel tabId="counter1">
      <Counter />
    </TabsPanel>
    <TabsPanel tabId="counter2">
      <Counter />
    </TabsPanel>
  </TabsPanels>
</Tabs>
`.trim();

export const demo2code2 = `
// Import and rename the components to avoid confusion with the default ones

import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "@emmgfx/activity-tabs";

// Export your own components, with your own styles

export const Tabs = (props: React.ComponentProps<typeof RATabs>) => (
  <RATabs className="overflow-hidden rounded-2xl" {...props} />
);
export const TabsList = (props: React.ComponentProps<typeof RATabsList>) => (
  <RATabsList className="bg-purple-500 p-1 pb-0" {...props} />
);

export const TabsTab = (props: React.ComponentProps<typeof RATabsTab>) => (
  <RATabsTab
    className="rounded-t-xl bg-purple-500 px-4 py-2 text-purple-100"
    activeClassName="py-2 px-4 bg-purple-100 text-purple-800 rounded-t-xl"
    {...props}
  />
);

export const TabsPanels = (
  props: React.ComponentProps<typeof RATabsPanels>,
) => <RATabsPanels className="bg-purple-500 p-1 pt-0" {...props} />;

export const TabsPanel = (props: React.ComponentProps<typeof RATabsPanel>) => (
  <RATabsPanel className="rounded-b-xl bg-purple-100 p-4" {...props} />
);
`.trim();

export const Demo2 = () => {
  return (
    <Tabs initialActiveTab="counter1">
      <TabsList>
        <TabsTab tabId="counter1">First counter</TabsTab>
        <TabsTab tabId="counter2">Second counter</TabsTab>
      </TabsList>
      <TabsPanels>
        <TabsPanel tabId="counter1">
          <Counter />
        </TabsPanel>
        <TabsPanel tabId="counter2">
          <Counter />
        </TabsPanel>
      </TabsPanels>
    </Tabs>
  );
};
