export function pathPrefix(p: string) {
  if(import.meta.env.BASE_URL) {
    const pp = p.startsWith('/') ? p.slice(1) : p;
    return import.meta.env.BASE_URL + pp;
  }
  return p;
}