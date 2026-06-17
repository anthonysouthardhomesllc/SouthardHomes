// 1. Import utilities from `astro:content` and `astro/loaders`
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

// 2. Define your collection(s)
const blogCollection = defineCollection({
  // FIXED: Added the glob loader to look inside your blog folder
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Southard Homes LLC'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  // FIXED: Added the glob loader to look inside your team folder
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
};