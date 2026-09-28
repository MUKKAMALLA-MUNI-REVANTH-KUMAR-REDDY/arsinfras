/// <reference types="vite/client" />

// Google Analytics gtag global
interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: unknown[];
}
