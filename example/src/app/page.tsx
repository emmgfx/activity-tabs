import { Layers, Paintbrush, Code2, Shuffle } from "lucide-react";
import { Code } from "bright";

import { CodeBlock } from "@/components/CodeBlock";
import { Demo1, demo1code } from "@/components/Demo1";
import { Demo2, demo2code1, demo2code2 } from "@/components/Demo2";
import { Demo3 } from "@/components/Demo3";
import { demo3code } from "@/components/Demo3Code";
import {
  CodeTabs,
  CodeTabsList,
  CodeTabsPanel,
  CodeTabsPanels,
  CodeTabsTab,
} from "@/components/CustomTabsCode";
import { IconTSX } from "@/components/IconTSX";

Code.theme = "material-palenight";

const divider = <div className="w-full h-px bg-(--color-border)" />;

const features = [
  {
    icon: <Layers className="w-8 h-8 text-(--color-accent)" strokeWidth={1.5} />,
    title: "State preserved",
    description:
      "Panel content stays mounted and alive when switching tabs — no state reset, no re-render.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-(--color-accent)" strokeWidth={1.5} />,
    title: "Fully stylable",
    description:
      "Pass className and activeClassName to every component. Zero bundled styles.",
  },
  {
    icon: <Shuffle className="w-8 h-8 text-(--color-accent)" strokeWidth={1.5} />,
    title: "Headless",
    description:
      "No opinions on markup or layout. Compose tabs however your design needs.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-(--color-accent)" strokeWidth={1.5} />,
    title: "TypeScript",
    description:
      "Fully typed components and a useActiveTab hook for programmatic control.",
  },
];

const propsData = {
  Tabs: [
    { name: "initialActiveTab", type: "string | number", def: "undefined", desc: "Tab ID to activate on first render." },
    { name: "className", type: "string", def: "undefined", desc: "Class applied to the wrapper div." },
    { name: "children", type: "ReactNode", def: "—", desc: "Should contain TabsList and TabsPanels." },
  ],
  TabsTab: [
    { name: "tabId", type: "string | number", def: "—", desc: "Unique ID matching the TabsPanel to activate." },
    { name: "className", type: "string", def: "undefined", desc: "Class applied when the tab is inactive." },
    { name: "activeClassName", type: "string", def: "undefined", desc: "Class applied when the tab is active." },
    { name: "children", type: "ReactNode", def: "—", desc: "Tab label content." },
  ],
  TabsPanel: [
    { name: "tabId", type: "string | number", def: "—", desc: "ID of the tab that reveals this panel." },
    { name: "className", type: "string", def: "undefined", desc: "Class applied to the panel wrapper." },
    { name: "children", type: "ReactNode", def: "—", desc: "Panel content — stays mounted when inactive." },
  ],
};

export default function Page() {
  return (
    <div className="w-full max-w-281.5 mx-auto min-[1126px]:border-x min-[1126px]:border-(--color-border) min-h-screen flex flex-col text-center">

      {/* Hero */}
      <header className="flex flex-col items-center px-10 pt-20 pb-18 gap-5 max-sm:px-6 max-sm:pt-12 max-sm:pb-12">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-(--color-border) bg-(--color-surface)">
          <code className="text-[13px] font-mono text-(--color-accent)">
            npm install @emmgfx/activity-tabs
          </code>
        </div>
        <h1 className="text-7xl font-medium tracking-[-2px] text-(--color-heading) mt-2 max-sm:text-5xl">
          activity-<span className="text-(--color-accent)">tabs</span>
        </h1>
        <p className="text-lg text-(--color-body) max-w-md text-center leading-relaxed">
          Headless React tabs that{" "}
          <span className="text-(--color-heading) font-medium">
            preserve state
          </span>{" "}
          when switching — built on React{" "}
          <a
            href="https://react.dev/reference/react/Activity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-accent) border-b border-(--color-accent-border) hover:border-(--color-accent)"
          >
            Activity
          </a>
          .
        </p>
        <div className="flex gap-3 mt-2 flex-wrap justify-center">
          <a
            href="https://github.com/emmgfx/activity-tabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-(--color-border) text-(--color-heading) text-sm font-medium hover:bg-(--color-surface) transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@emmgfx/activity-tabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-(--color-border) text-(--color-heading) text-sm font-medium hover:bg-(--color-surface) transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
            </svg>
            npm
          </a>
        </div>
      </header>

      {divider}

      {/* Features */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="text-left px-8 py-7 border-(--color-border) max-lg:odd:border-r max-lg:nth-[-n+2]:border-b lg:border-r lg:last:border-r-0 max-sm:px-6"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-base font-semibold text-(--color-heading) mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-(--color-body) leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>

      {divider}

      {/* Usage */}
      <section className="text-left">
        <div className="px-10 py-8 border-b border-(--color-border) max-sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-heading)">
            Usage
          </h2>
        </div>
        <CodeBlock>{`import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@emmgfx/activity-tabs";

<Tabs initialActiveTab="tab1">
  <TabsList>
    <TabsTab tabId="tab1" className="..." activeClassName="...">Tab 1</TabsTab>
    <TabsTab tabId="tab2" className="..." activeClassName="...">Tab 2</TabsTab>
  </TabsList>
  <TabsPanels>
    <TabsPanel tabId="tab1">Content for tab 1</TabsPanel>
    <TabsPanel tabId="tab2">Content for tab 2</TabsPanel>
  </TabsPanels>
</Tabs>`}</CodeBlock>
      </section>

      {divider}

      {/* Demo 1 */}
      <section className="text-left">
        <div className="px-10 py-8 border-b border-(--color-border) max-sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-heading) mb-1">
            Basic styling with Tailwind
          </h2>
          <p className="text-sm text-(--color-body)">
            Switch tabs and increment the counter — switch back and the count is still there.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
          <div className="flex items-start justify-center p-10 border-b lg:border-b-0 lg:border-r border-(--color-border) max-sm:p-6 lg:sticky lg:top-0 lg:self-start">
            <Demo1 />
          </div>
          <CodeBlock>{demo1code}</CodeBlock>
        </div>
      </section>

      {divider}

      {/* Demo 2 */}
      <section className="text-left">
        <div className="px-10 py-8 border-b border-(--color-border) max-sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-heading) mb-1">
            Reusable custom components
          </h2>
          <p className="text-sm text-(--color-body)">
            Wrap the primitives with your own styles once, reuse everywhere.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
          <div className="border-b lg:border-b-0 lg:border-r border-(--color-border) min-w-0 overflow-hidden">
            <CodeTabs initialActiveTab="usage">
              <CodeTabsList>
                <CodeTabsTab tabId="usage">
                  <div className="flex items-center gap-2">
                    <IconTSX />
                    usage.tsx
                  </div>
                </CodeTabsTab>
                <CodeTabsTab tabId="definition">
                  <div className="flex items-center gap-2">
                    <IconTSX />
                    definition.tsx
                  </div>
                </CodeTabsTab>
              </CodeTabsList>
              <CodeTabsPanels>
                <CodeTabsPanel tabId="usage">
                  <CodeBlock>{demo2code1}</CodeBlock>
                </CodeTabsPanel>
                <CodeTabsPanel tabId="definition">
                  <CodeBlock>{demo2code2}</CodeBlock>
                </CodeTabsPanel>
              </CodeTabsPanels>
            </CodeTabs>
          </div>
          <div className="flex items-start justify-center p-10 max-sm:p-6 lg:sticky lg:top-0 lg:self-start">
            <Demo2 />
          </div>
        </div>
      </section>

      {divider}

      {/* Demo 3 — useActiveTab hook */}
      <section className="text-left">
        <div className="px-10 py-8 border-b border-(--color-border) max-sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-heading) mb-1">
            Programmatic control with{" "}
            <code className="text-[0.9em] font-mono text-(--color-accent)">
              useActiveTab
            </code>
          </h2>
          <p className="text-sm text-(--color-body)">
            Use the hook inside any child component to read or set the active
            tab from outside the tab buttons.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
          <div className="flex items-start justify-center p-10 border-b lg:border-b-0 lg:border-r border-(--color-border) max-sm:p-6 lg:sticky lg:top-0 lg:self-start">
            <Demo3 />
          </div>
          <CodeBlock>{demo3code}</CodeBlock>
        </div>
      </section>

      {divider}

      {/* Props */}
      <section className="text-left pb-12 max-sm:pb-8">
        <div className="px-10 py-8 border-b border-(--color-border) max-sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-heading)">
            API reference
          </h2>
        </div>

        {Object.entries(propsData).map(([component, rows]) => (
          <div key={component} className="border-b border-(--color-border) last:border-b-0">
            <div className="px-10 py-5 border-b border-(--color-border) max-sm:px-6">
              <code className="text-base font-mono font-semibold text-(--color-accent)">
                {"<"}{component}{" />"}
              </code>
            </div>
            <div className="overflow-x-auto px-10 max-sm:px-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-(--color-border)">
                    {["Prop", "Type", "Default", "Description"].map((h) => (
                      <th
                        key={h}
                        className="text-left text-xs font-semibold uppercase tracking-wider text-(--color-body) py-3 px-4"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-(--color-border) last:border-0"
                    >
                      <td className="py-3.5 px-4">
                        <code className="text-[13px] font-mono text-(--color-heading)">
                          {row.name}
                        </code>
                      </td>
                      <td className="py-3.5 px-4">
                        <code className="text-[13px] font-mono text-sky-500">
                          {row.type}
                        </code>
                      </td>
                      <td className="py-3.5 px-4">
                        <code className="text-[13px] font-mono text-emerald-500">
                          {row.def}
                        </code>
                      </td>
                      <td className="py-3.5 px-4 text-(--color-body)">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {divider}

      {/* Footer */}
      <footer className="py-8 text-sm text-(--color-body) text-center">
        MIT License &mdash;{" "}
        <a
          href="https://www.viciana.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--color-accent) hover:underline"
        >
          Josep Viciana
        </a>
      </footer>
    </div>
  );
}
