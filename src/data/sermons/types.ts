export type Sermon = {
  title: string;
  slug: string;
  book: string;
  bookSlug: string;
  passage: string;
  date: string; // YYYY-MM-DD
  youtubeId: string;
  summary: string;
  outline?: string[];
  tags?: string[];
  series?: string;
};

export type SermonBook = {
  book: string;
  bookSlug: string;
  sermons: Sermon[];
};
