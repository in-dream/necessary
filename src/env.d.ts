/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// images
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.ico' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '@domchristie/turn' {
  export declare function start(): void;
  export declare const config: {
    experimental: {
      viewTransitions: boolean;
    };
  };
}
