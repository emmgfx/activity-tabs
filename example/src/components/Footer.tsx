import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="h-16" />
      <p className="text-center text-balance text-slate-700">
        &copy; 2026{" "}
        <Link
          href="https://github.com/emmgfx/react-activity-tabs"
          className="text-nowrap underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-activity-tabs
        </Link>
        . Built by{" "}
        <Link
          href="https://www.viciana.me"
          className="text-nowrap underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josep Viciana
        </Link>
      </p>
      <div className="h-16" />
    </footer>
  );
};
