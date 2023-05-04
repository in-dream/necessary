import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { title, description } from '@consts';

export async function get(context: { site: string }) {
  const posts = await getCollection('posts');
  const result = rss({
    title: title,
    description: description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.slug}`,
      pubDate: post.data.date,
    })),
    stylesheet: '/rss/styles.xsl',
  });
  return result;
}
