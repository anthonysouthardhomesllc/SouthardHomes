/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_API_KEY: string;
  readonly CLOUDINARY_API_SECRET: string;
  readonly PUBLIC_WEB3FORMS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}