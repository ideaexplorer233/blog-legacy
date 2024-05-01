import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { config } from "../config.ts";

// TODO: Complete this feature

export async function GET(context: any) {
    const posts = await getCollection("posts");
    return rss({
        title: config.siteName,
        description: config.siteDescription,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/post/${post.slug}/`,
        })),
        // TODO: we should have i18n here (create one in zh dir)
        customData: `<language>en-us</language>`,
    });
}
