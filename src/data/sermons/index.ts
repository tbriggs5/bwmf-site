import type { Sermon, SermonBook } from "./types";
import { john } from "./john";
import { firstSamuel } from "./1-samuel";

export const sermonBooks: SermonBook[] = [john, firstSamuel];

export function getAllSermons(): Sermon[] {
  return sermonBooks.flatMap((b) => b.sermons);
}

export function getBookBySlug(bookSlug: string): SermonBook | undefined {
  return sermonBooks.find((b) => b.bookSlug === bookSlug);
}

export function getSermon(bookSlug: string, sermonSlug: string): Sermon | undefined {
  const book = getBookBySlug(bookSlug);
  return book?.sermons.find((s) => s.slug === sermonSlug);
}
