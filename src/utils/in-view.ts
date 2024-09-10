export type ViewChangeHandler = (entry: IntersectionObserverEntry) => void;

export interface InViewOptions {
  root?: Element | Document;
  margin?: string;
  amount?: "any" | "all" | number;
}

const thresholds = {
  any: 0,
  all: 1,
};

export function inView(
  elementOrSelector: Element | string,
  onStart: (entry: IntersectionObserverEntry) => void | ViewChangeHandler,
  { root, margin: rootMargin, amount = "any" }: InViewOptions = {},
) {
  if (typeof IntersectionObserver === "undefined") {
    return () => {};
  }

  const actionIntersections = new WeakMap<Element, ViewChangeHandler>();

  const onIntersectionChange: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const onEnd = actionIntersections.get(entry.target);

      if (entry.isIntersecting === Boolean(onEnd)) return;

      if (entry.isIntersecting) {
        const nowOnEnd = onStart(entry);

        if (nowOnEnd) {
          actionIntersections.set(entry.target, nowOnEnd);
        } else {
          // intentionally not unobserving so that when the user scroll up again, the element will be observed again
          // observer.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        actionIntersections.delete(entry.target);
      }
    });
  };

  setTimeout(() => {
    const element =
      typeof elementOrSelector === "string"
        ? document.querySelector(elementOrSelector)
        : elementOrSelector;

    if (!element) {
      console.warn("Element not found (in-view)", elementOrSelector);
      return () => {};
    }

    const observer = new IntersectionObserver(onIntersectionChange, {
      root,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholds[amount],
    });

    observer.observe(element!);

    return () => observer.disconnect();
  }, 500);
}
