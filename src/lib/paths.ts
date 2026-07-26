/** Prefissa i path con `import.meta.env.BASE_URL` (es. `/peru/` su GitHub Pages). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
