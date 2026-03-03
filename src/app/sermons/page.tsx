import Link from "next/link";
import { sermonBooks } from "@/data/sermons";
import { formatDate } from "@/lib/format";

export default function SermonsHomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Sermons</h1>
        <p className="text-zinc-700">Browse by book of the Bible.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sermonBooks.map((b) => {
          const latest = [...b.sermons].sort((a, c) => (a.date < c.date ? 1 : -1))[0];
          return (
            <Link
              key={b.bookSlug}
              href={`/sermons/${b.bookSlug}`}
              className="rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50"
            >
              <div className="text-lg font-semibold">{b.book}</div>
              <div className="mt-1 text-sm text-zinc-600">
                {b.sermons.length} sermon{b.sermons.length === 1 ? "" : "s"}
              </div>
              {latest ? (
                <div className="mt-4 text-sm text-zinc-700">
                  Latest: <span className="font-medium">{latest.title}</span>
                  <div className="text-xs text-zinc-500">{formatDate(latest.date)}</div>
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
