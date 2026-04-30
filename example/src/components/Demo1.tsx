import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@emmgfx/activity-tabs";

import { Counter } from "@/components/Counter";

export const demo1code = `
<Tabs initialActiveTab="counter1" className="rounded-xl border border-(--color-border) overflow-hidden w-full max-w-sm">
  <TabsList className="flex border-b border-(--color-border)">
    <TabsTab
      tabId="counter1"
      className="flex-1 px-4 py-3 text-sm text-(--color-body) hover:text-(--color-heading) transition-colors border-b-2 border-transparent -mb-px"
      activeClassName="flex-1 px-4 py-3 text-sm font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
    >
      First counter
    </TabsTab>
    <TabsTab
      tabId="counter2"
      className="flex-1 px-4 py-3 text-sm text-(--color-body) hover:text-(--color-heading) transition-colors border-b-2 border-transparent -mb-px"
      activeClassName="flex-1 px-4 py-3 text-sm font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
    >
      Second counter
    </TabsTab>
  </TabsList>
  <TabsPanels>
    <TabsPanel tabId="counter1" className="p-5">
      <Counter />
    </TabsPanel>
    <TabsPanel tabId="counter2" className="p-5">
      <Counter />
    </TabsPanel>
  </TabsPanels>
</Tabs>
`.trim();

export const Demo1 = () => {
  return (
    <Tabs
      initialActiveTab="counter1"
      className="rounded-xl border border-(--color-border) overflow-hidden w-full max-w-sm"
    >
      <TabsList className="flex border-b border-(--color-border)">
        <TabsTab
          tabId="counter1"
          className="flex-1 px-4 py-3 text-sm text-(--color-body) hover:text-(--color-heading) transition-colors"
          activeClassName="flex-1 px-4 py-3 text-sm font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
        >
          First counter
        </TabsTab>
        <TabsTab
          tabId="counter2"
          className="flex-1 px-4 py-3 text-sm text-(--color-body) hover:text-(--color-heading) transition-colors"
          activeClassName="flex-1 px-4 py-3 text-sm font-medium text-(--color-accent) border-b-2 border-(--color-accent) -mb-px"
        >
          Second counter
        </TabsTab>
      </TabsList>
      <TabsPanels>
        <TabsPanel tabId="counter1" className="p-5">
          <Counter />
        </TabsPanel>
        <TabsPanel tabId="counter2" className="p-5">
          <Counter />
        </TabsPanel>
      </TabsPanels>
    </Tabs>
  );
};
