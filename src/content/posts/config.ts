import {defineCollection, z} from "astro:content";

const postSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional(),
    description: z.string(),
    author: z.string().optional(),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }).optional(),
    tags: z.array(z.string()),
    options: z.object({}).optional()
})

const postsCollection = defineCollection({
    type: 'content',
    schema: postSchema
});

export const collections = {
    posts: postsCollection,
};

export type postType = z.infer<typeof postSchema>
