import { useEffect, RefObject } from "react";

type Handler = (event: MouseEvent) => void;

export default function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: Handler
): void {
  const isClickOutside = (e: MouseEvent) => {
    const el = ref.current;
    // click ref
    if (!el || el.contains(e.target as Node)) {
      return;
    }

    handler(e);
  };

  useEffect(() => {
    document.addEventListener("mousedown", isClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", isClickOutside, true);
    };
  }, [ref, handler]);
}
