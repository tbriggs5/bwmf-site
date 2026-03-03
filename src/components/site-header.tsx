import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Substack" },
  { href: "/sermons", label: "Sermons" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">Born Wild</span>
          <span className="text-lg font-semibold tracking-tight text-zinc-500">
            Made Free
          </span>
          <span className="ml-2 hidden text-xs text-zinc-500 md:inline">
            Tyler Briggs
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-zinc-700 hover:text-zinc-950"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
