import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div className="h-4 md:h-12" />
      <div>
        <Link
          href="/"
          className="mx-auto flex w-fit items-center justify-center gap-1 text-center text-lg font-semibold capitalize md:text-2xl"
        >
          <span className="sr-only">@emmgfx/</span>
          <span className="rounded-t-2xl rounded-b-sm bg-purple-100 px-3 pt-1.5 pb-1 text-purple-950 md:px-6 md:py-2">
            activity
          </span>
          <span className="sr-only">-</span>
          <span className="rounded-t-2xl rounded-b-sm bg-purple-400 px-3 pt-1.5 pb-1 text-purple-950 md:px-6 md:py-2">
            tabs
          </span>
        </Link>
      </div>
      <div className="h-8 md:h-16" />

      <div className="text-center text-balance">
        React tabs component that doesn't lose your state
      </div>
      <div className="h-4 md:h-12" />
    </div>
  );
};
