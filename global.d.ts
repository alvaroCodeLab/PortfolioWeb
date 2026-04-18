// Global type declarations to allow importing CSS and static assets in TS
declare module '*.css';
declare module '*.module.css';
declare module '*.scss';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg';

interface NodeModule {
  hot?: { accept: (path?: string, cb?: () => void) => void };
}
