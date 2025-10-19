import rss from "@astrojs/rss";
import site from "@data/site.json";
import { getCollection } from "astro:content";

const posts = await getCollection("milestones");

export function GET(context) {
  return rss({
    title: site.site_title,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      link: `/milestones/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
    })),
  });
}
