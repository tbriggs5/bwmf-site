import { getSubstackFeed } from "@/lib/substack";
import { formatDate } from "@/lib/format";
import { SubstackSubscribe } from "@/components/substack-subscribe";

export const revalidate = 60 * 30;

export default async function PostsPage() {
  const posts = await getSubstackFeed(25);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Substack Posts</h1>
        <p className="text-zinc-700">
          Latest posts from Substack. Click through to read and subscribe.
        </p>
      </div>

      <SubstackSubscribe />

      <div className="space-y-4">
        {posts.map((p) => (
          <a
            key={p.link}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-zinc-200 p-5 hover:bg-zinc-50"
          >
            <div className="text-base font-medium">{p.title}</div>
            <div className="mt-1 text-sm text-zinc-500">{formatDate(p.pubDate)}</div>
            {p.contentSnippet ? (
              <div className="mt-3 text-sm text-zinc-700 line-clamp-3">
                {p.contentSnippet}
              </div>
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
