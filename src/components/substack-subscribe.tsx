export function SubstackSubscribe() {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6">
      <h3 className="text-lg font-semibold">Subscribe</h3>
      <p className="mt-1 text-sm text-zinc-600">
        Get new posts (and sermon reflections) in your inbox.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl border border-zinc-200">
        <iframe
          title="Substack Subscribe"
          src="https://ctylerbriggs.substack.com/embed"
          className="h-[220px] w-full"
          scrolling="no"
        />
      </div>
    </div>
  );
}
