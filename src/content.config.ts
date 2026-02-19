import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.array(z.string()).optional().default([]),
		date: z.coerce.date(),
		heroimage: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		categories: z.array(z.string()).optional().default([]),
	}),
});

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.array(z.string()).optional().default([]),
		date: z.coerce.date(),
		heroimage: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		platform: z.string().optional(),
		stack: z.array(z.string()).optional().default([]),
	}),
});

export const collections = { blog, projects };
