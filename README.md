# @emmgfx/activity-tabs

Headless tabs for React built on [`<Activity>`](https://react.dev/reference/react/Activity). Hidden panels stay mounted, so they keep their state (form inputs, scroll position, counters) when you switch tabs, instead of being thrown away and rebuilt.

## Installation

```bash
npm install @emmgfx/activity-tabs
```

Requires React 19.2 or newer, the first version with `<Activity>`. TypeScript types are included, and the components are marked `"use client"`, so they work in the Next.js App Router.

## Usage

```jsx
import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@emmgfx/activity-tabs";

<Tabs initialActiveTab="profile">
  <TabsList>
    <TabsTab tabId="profile">Profile</TabsTab>
    <TabsTab tabId="settings">Settings</TabsTab>
  </TabsList>
  <TabsPanels>
    <TabsPanel tabId="profile">
      <Profile />
    </TabsPanel>
    <TabsPanel tabId="settings">
      <Settings />
    </TabsPanel>
  </TabsPanels>
</Tabs>
```

Each `TabsTab` activates the `TabsPanel` with the same `tabId`. Inactive panels are hidden with `<Activity mode="hidden">`: their DOM and state are kept, while their effects are cleaned up and only set up again when the panel is shown.

## Components

### `Tabs`

Holds the active tab and renders a wrapper `div`.

| Prop               | Type               | Default     | Description                                                   |
| ------------------ | ------------------ | ----------- | ------------------------------------------------------------- |
| `initialActiveTab` | `string \| number` | `undefined` | Tab to show first. Without it, no panel is visible until a tab is clicked. |
| `className`        | `string`           | `undefined` | Class for the wrapper `div`.                                  |
| `children`         | `ReactNode`        |             | Usually a `TabsList` and a `TabsPanels`.                      |

### `TabsList`

A `div` to group the tabs. Takes `className` and `children`.

### `TabsTab`

A `button` that activates its panel when clicked.

| Prop              | Type               | Default     | Description                              |
| ----------------- | ------------------ | ----------- | ---------------------------------------- |
| `tabId`           | `string \| number` |             | Id of the panel it activates.            |
| `className`       | `string`           | `undefined` | Class while the tab is inactive.         |
| `activeClassName` | `string`           | `undefined` | Class while the tab is active.           |
| `children`        | `ReactNode`        |             | Tab label.                               |

`activeClassName` replaces `className` rather than adding to it, so repeat any shared classes in both.

### `TabsPanels`

A `div` to group the panels. Takes `className` and `children`.

### `TabsPanel`

| Prop        | Type               | Default     | Description                              |
| ----------- | ------------------ | ----------- | ---------------------------------------- |
| `tabId`     | `string \| number` |             | Id of the tab that shows this panel.     |
| `className` | `string`           | `undefined` | Class for the panel `div`.               |
| `children`  | `ReactNode`        |             | Panel content.                           |

## `useActiveTab`

Reads and changes the active tab from any component inside `Tabs`, for custom tab buttons or controls of your own. It returns the same pair as `useState`.

```jsx
import { useActiveTab } from "@emmgfx/activity-tabs";

const NextButton = ({ ids }) => {
  const [activeTab, setActiveTab] = useActiveTab();
  const index = ids.indexOf(activeTab);
  return (
    <button
      onClick={() => setActiveTab(ids[index + 1])}
      disabled={index === ids.length - 1}
    >
      Next
    </button>
  );
};
```

It throws when used outside a `Tabs`.

## Styling

The components ship no styles. Pass `className` (and `activeClassName` on tabs) to style them, or wrap them once with your defaults:

```jsx
import { TabsTab as BaseTabsTab } from "@emmgfx/activity-tabs";

export const TabsTab = (props) => (
  <BaseTabsTab className="tab" activeClassName="tab tab-active" {...props} />
);
```

## License

MIT © [Josep Viciana](https://www.viciana.me)
