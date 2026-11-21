// Extras inside an encyclopedia article: Gavin's field note (with audio) and interactives.
// Read straight from the article's Markdown, so a new note shows up on the shelf and badges by itself.
export type Extras = {
  note?: { title: string; audio?: string; length?: string; hook: string };
  interactive?: { title: string; anchor: string };
};

export function extrasOf(body: string | undefined): Extras {
  const out: Extras = {};
  if (!body) return out;
  const i = body.indexOf('<aside class="fieldnote"');
  if (i >= 0) {
    const note = body.slice(i, body.indexOf('</aside>', i));
    const title = note.match(/^### (.+)$/m)?.[1].trim() ?? 'Field note';
    const audio = note.match(/<audio[^>]*src="([^"]+)"/)?.[1];
    const length = note.match(/Listen · (\d+:\d\d)/)?.[1];
    const paras = [...note.matchAll(/^\*\*([^*]+)\.\*\* (.+)$/gm)].map((m) => ({ label: m[1], text: m[2] }));
    // The hook is the closing line of his verdict: the Assessment paragraph if there is one, else the last paragraph.
    const last = (paras.find((x) => x.label === 'Assessment') ?? paras.at(-1))?.text ?? '';
    const sentences = last.match(/[^.!?]+[.!?]+/g) ?? [last];
    out.note = { title, audio, length, hook: sentences.at(-1)!.trim() };
  }
  const cav = body.match(/<figure[^>]*id="([^"]+)"[^>]*>[\s\S]*?class="cav-title"[^>]*>([^<]+)</);
  if (cav) out.interactive = { anchor: cav[1], title: cav[2].trim() };
  return out;
}
