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
       <Link href="/" className="flex items-center">
  <div className="text-sm font-semibold tracking-wider text-charcoal md:text-base">
    BORN WILD <span className="mx-3 text-forest">✝</span> MADE FREE
    <span className="ml-3 hidden text-xs font-normal tracking-normal text-zinc-500 md:inline">
      Tyler Briggs
    </span>
  </div>
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
