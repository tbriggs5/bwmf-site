import Link from "next/link";
import { getSubstackFeed } from "@/lib/substack";
import { formatDate } from "@/lib/format";
import { sermonBooks } from "@/data/sermons";
import { SubstackSubscribe } from "@/components/substack-subscribe";

export default async function HomePage() {
  const posts = await getSubstackFeed(5);

  const latestSermons = sermonBooks
    .flatMap((b) => b.sermons)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
          expository preaching • biblical theology • outdoors reflections
        </div>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Born wild in our rebellion.
          <span className="block text-zinc-500">Made free in Christ.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-700">
          A home for sermons and reflections—where the wilderness becomes a classroom
          and Jesus remains the anchor.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/posts"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Read Substack
          </Link>
          <Link
            href="/sermons"
            className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Browse Sermons
          </Link>
        </div>
      </section>

      <SubstackSubscribe />

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">Latest Substack Posts</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Pulled automatically from your Substack feed.
          </p>

          <div className="mt-6 space-y-4">
            {posts.length === 0 ? (
              <p className="text-sm text-zinc-600">
                Add <code className="rounded bg-zinc-100 px-1">SUBSTACK_FEED_URL</code>{" "}
                to <code className="rounded bg-zinc-100 px-1">.env.local</code>.
              </p>
            ) : (
              posts.map((p) => (
                <a
                  key={p.link}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-zinc-200 p-4 hover:bg-zinc-50"
                >
                  <div className="text-sm font-medium">{p.title}</div>
                  <div className="mt-1 text-xs text-zinc-500">
                    {formatDate(p.pubDate)}
                  </div>
                  {p.contentSnippet ? (
                    <div className="mt-2 text-sm text-zinc-700 line-clamp-2">
                      {p.contentSnippet}
                    </div>
                  ) : null}
                </a>
              ))
            )}
          </div>

          <div className="mt-6">
            <Link href="/posts" className="text-sm text-zinc-900 underline">
              View all posts
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">Recent Sermons</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Sermons publish weekly—organized by book.
          </p>

          <div className="mt-6 space-y-4">
            {latestSermons.map((s) => (
              <Link
                key={`${s.bookSlug}-${s.slug}`}
                href={`/sermons/${s.bookSlug}/${s.slug}`}
                className="block rounded-xl border border-zinc-200 p-4 hover:bg-zinc-50"
              >
                <div className="text-sm font-medium">{s.title}</div>
                <div className="mt-1 text-xs text-zinc-500">
                  {s.passage} • {formatDate(s.date)}
                </div>
                <div className="mt-2 text-sm text-zinc-700 line-clamp-2">{s.summary}</div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/sermons" className="text-sm text-zinc-900 underline">
              View sermon archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
