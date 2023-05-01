import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { title, description } from "@consts";

export async function get(context: { site: string }) {
  const posts = await getCollection("posts");
  return rss({
    title: title,
    description: description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.slug}`,
      pubDate: post.data.date,
    })),
  });
}
