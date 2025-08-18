import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown files in the src/content/blog directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: z.object({
				src: image(),
				alt: z.string(),
			}),
			// Transform string to Date object
			date: z.date({ coerce: true }),
		}),
});

export const collections = { blog };
