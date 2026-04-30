import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@emmgfx/activity-tabs";

import { Counter } from "@/components/Counter";

export const demo1code = `
<Tabs initialActiveTab="counter1" className="overflow-hidden rounded-2xl">
  <TabsList className="bg-purple-500 p-1 pb-0">
    <TabsTab
      tabId="counter1"
      className="rounded-t-xl bg-purple-500 px-4 py-2 text-purple-100"
      activeClassName="py-2 px-4 bg-purple-100 text-purple-800 rounded-t-xl"
    >
      First counter
    </TabsTab>
    <TabsTab
      tabId="counter2"
      className="rounded-t-xl bg-purple-500 px-4 py-2 text-purple-100"
      activeClassName="py-2 px-4 bg-purple-100 text-purple-800 rounded-t-xl"
    >
      Second counter
    </TabsTab>
  </TabsList>
  <TabsPanels className="bg-purple-500 p-1 pt-0">
    <TabsPanel tabId="counter1" className="rounded-b-xl bg-purple-100 p-4">
      <Counter />
    </TabsPanel>
    <TabsPanel tabId="counter2" className="rounded-b-xl bg-purple-100 p-4">
      <Counter />
    </TabsPanel>
  </TabsPanels>
</Tabs>
`.trim();

export const Demo1 = () => {
  return (
    <Tabs initialActiveTab="counter1" className="overflow-hidden rounded-2xl">
      <TabsList className="bg-purple-500 p-1 pb-0">
        <TabsTab
          tabId="counter1"
          className="rounded-t-xl bg-purple-500 px-4 py-2 text-purple-100"
          activeClassName="py-2 px-4 bg-purple-100 text-purple-800 rounded-t-xl"
        >
          First counter
        </TabsTab>
        <TabsTab
          tabId="counter2"
          className="rounded-t-xl bg-purple-500 px-4 py-2 text-purple-100"
          activeClassName="py-2 px-4 bg-purple-100 text-purple-800 rounded-t-xl"
        >
          Second counter
        </TabsTab>
      </TabsList>
      <TabsPanels className="bg-purple-500 p-1 pt-0">
        <TabsPanel tabId="counter1" className="rounded-b-xl bg-purple-100 p-4">
          <Counter />
        </TabsPanel>
        <TabsPanel tabId="counter2" className="rounded-b-xl bg-purple-100 p-4">
          <Counter />
        </TabsPanel>
      </TabsPanels>
    </Tabs>
  );
};
