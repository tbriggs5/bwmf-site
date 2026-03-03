import Parser from "rss-parser";

export type SubstackItem = {
  title: string;
  link: string;
  pubDate?: string;
  contentSnippet?: string;
};

const parser = new Parser();

export async function getSubstackFeed(limit = 12): Promise<SubstackItem[]> {
  const feedUrl = process.env.SUBSTACK_FEED_URL;
  if (!feedUrl) return [];

  const feed = await parser.parseURL(feedUrl);
  return (feed.items ?? []).slice(0, limit).map((it) => ({
    title: it.title ?? "Untitled",
    link: it.link ?? "#",
    pubDate: it.pubDate,
    contentSnippet: it.contentSnippet,
  }));
}
