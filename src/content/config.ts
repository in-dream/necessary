import { defineCollection, z } from 'astro:content';
import { defaultCity } from '@consts';

const times = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string().default('default'),
    links: z
      .array(
        z.object({
          url: z.string(),
          title: z.string(),
          desc: z.string(),
        }),
      )
      .default([]),
  }),
});

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    author: z.string(),
    type: z.string().default('default'),
    music: z
      .object({
        name: z.string(),
        author: z.string(),
        avatar: z.string(),
        url: z.string(),
      })
      .default({
        name: '',
        author: '',
        avatar: '',
        url: '',
      }),
    photo: z.array(z.string()).default([]),
    location: z.string().default(defaultCity),
    category: z.string().default('default'),
  }),
});

export const collections = {
  posts,
  pages,
  times,
};
