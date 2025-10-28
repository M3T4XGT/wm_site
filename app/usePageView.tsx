"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function usePageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);
}
