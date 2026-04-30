export const Content = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <div className="px-2 py-16">
    <div className="mx-auto max-w-7xl">{children}</div>
  </div>
);
