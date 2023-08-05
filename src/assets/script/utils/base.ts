type Element = HTMLElement | null;

export function exportScript(name: string, conf: any) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = `window.${name} = ${JSON.stringify(conf)};`;
  document.body.appendChild(script);
}

export function insertScript(src: string) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

export const withCdn = (src: string) => (
  src.startsWith("/") ? `https://cdn.zmh-program.site/fystart${src}` : src
);

export function contain(el: Element, target: HTMLElement): boolean {
  return el ? (el == target || el.contains(target)) : false;
}

export function contains(els: Element[], target: HTMLElement): boolean {
  return els.some((el: Element) => contain(el, target));
}

export function swap<T>(arr: T[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function clipboard(text: string) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export function getSelectionText(): string | undefined {
  return window.getSelection ? window.getSelection()?.toString() : "";
}

export function getFavicon(url: string): string {
  try {
    const instance = new URL(url);
    return `${instance.origin}/favicon.ico`;
  } catch {
    return "/tool/unknown.svg";
  }
}