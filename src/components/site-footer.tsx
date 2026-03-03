export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-10 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Born Wild Made Free.</p>
        <p className="text-zinc-500">
          “So if the Son sets you free, you will be free indeed.” (John 8:36)
        </p>
      </div>
    </footer>
  );
}
