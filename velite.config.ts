import { defineCollection, defineConfig, s } from 'velite';
import rehypePrettyCode from 'rehype-pretty-code';

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      date: s.string(),
      description: s.string(),
      slug: s.path(),
      content: s.markdown(),
    })
    .transform((data) => ({ ...data, slug: data.slug.split('/').pop() })),
});

export default defineConfig({
  root: 'src/content',
  collections: { posts },
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark-dimmed',
          keepBackground: true,
        },
      ],
    ],
  },
});
