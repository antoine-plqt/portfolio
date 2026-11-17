import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projets = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projetss'}),
    schema: z.object({
        titre: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        repo: z.string().url().optional(),
    }),
});

export const collections = { projets }