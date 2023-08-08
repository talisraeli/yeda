/// <reference types="vite/client" />

declare namespace preact {
  namespace JSX {
    interface IntrinsicAttributes {
      path?: string;
      default?: boolean;
    }
  }
}
