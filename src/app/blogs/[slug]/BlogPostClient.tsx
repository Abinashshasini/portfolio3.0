'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoArrowBack } from 'react-icons/io5';
import { handleSplitPhrase } from '@/utils/split';
import styles from '../blogs.module.scss';
import { motion } from 'framer-motion';

interface Post {
  title: string;
  date: string;
  description: string;
  slug: string;
  content: string;
}

// Format date
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// Estimate read time
function getReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textLength = content.split(/\s+/).length;
  const readTime = Math.ceil(textLength / wordsPerMinute);
  return `${readTime} min read`;
}

export default function BlogPostClient({ post }: { post: Post }) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animate title letters
      gsap.to('#post_title', {
        y: 0,
        stagger: 0.015,
        duration: 0.6,
        opacity: 1,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Animate description
      gsap.to('#post_description', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Animate content
      gsap.fromTo(
        '#post_content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.7,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <article className={styles.blogPostContainer} ref={containerRef}>
      {/* Navigation */}
      <motion.nav
        className={styles.nav}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <Link href="/blogs" className={styles.backLink}>
          <IoArrowBack />
          <span>Back to Blogs</span>
        </Link>
        <Link href="/blogs" className={styles.logo}>
          Engineering Logs
        </Link>
      </motion.nav>
      {/* Header */}
      <header className={styles.postHeader}>
        <div className={styles.postHeaderMeta}>
          <span className={styles.postHeaderDate}>{formatDate(post.date)}</span>
          <span>{getReadTime(post.content)}</span>
        </div>
        <h1 className={styles.postHeaderTitle}>
          {handleSplitPhrase(post.title, 'post_title')}
        </h1>
        <p className={styles.postHeaderDescription} id="post_description">
          {post.description}
        </p>
      </header>

      {/* MDX Content */}
      <div
        id="post_content"
        className={styles.mdxContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back to blogs */}
      <Link href="/blogs" className={styles.backToBlogs}>
        <IoArrowBack />
        <span>Back to all posts</span>
      </Link>
    </article>
  );
}
