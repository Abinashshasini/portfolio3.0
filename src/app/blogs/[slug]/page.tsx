import { posts } from '.velite';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// Helper to find the right post
async function getPostFromParams(slug: string) {
  return posts.find((post) => post.slug === slug);
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostFromParams(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Engineering Logs`,
    description: post.description,
  };
}

// Generate static paths for all posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostFromParams(slug);

  if (!post || !post.slug) notFound();

  return <BlogPostClient post={{ ...post, slug: post.slug as string }} />;
}
