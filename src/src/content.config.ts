import { defineCollection, z } from 'astro:content';

const directions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    coordinator: z.string().optional(),
    order: z.number(),
  }),
});

const members = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    is_pi: z.boolean().optional(),
    alumni: z.boolean().optional(),
    joint_training: z.boolean().optional(),
    degree: z.string().optional(),
    direction: z.string().optional(),
    project: z.string().optional(),
    email: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    citations: z.number().optional(),
    h_index: z.number().optional(),
    i10_index: z.number().optional(),
    google_scholar: z.string().optional(),
    office: z.string().optional(),
    affiliation: z.string().optional(),
    title: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    type: z.enum(['paper', 'patent', 'journal']).default('paper'),
    citations: z.number().optional(),
    highlight: z.boolean().optional(),
    cover: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    excerpt: z.string().optional(),
    tag: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { directions, members, publications, news };
