'use client';
import { useRef } from 'react';
import { posts } from '.velite';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { IoArrowForward } from 'react-icons/io5';
import { handleSplitPhrase } from '@/utils/split';
import styles from './blogs.module.scss';
import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger);

// Helper to estimate read time
function getReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textLength = content.split(/\s+/).length;
  const readTime = Math.ceil(textLength / wordsPerMinute);
  return `${readTime} min read`;
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

export default function BlogList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate hero title letters
      gsap.to('#blog_hero_title', {
        y: 0,
        stagger: 0.02,
        duration: 0.8,
        opacity: 1,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Animate hero description
      gsap.to('#blog_hero_description', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6,
      });

      // Animate post cards with stagger
      gsap.to('.post-card', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.8,
      });
    },
    { scope: containerRef },
  );

  return (
    <div className={styles.blogListContainer} ref={containerRef}>
      {/* Navigation */}
      <motion.nav
        className={styles.nav}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <Link href="/" className={styles.backLink}>
          <IoArrowBack />
          <span>Back to Portfolio</span>
        </Link>
        <Link href="/blogs" className={styles.logo}>
          Engineering Logs
        </Link>
      </motion.nav>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          {handleSplitPhrase('Engineering Logs', 'blog_hero_title')}
        </h1>
        <p className={styles.heroDescription} id="blog_hero_description">
          Thoughts, experiments, and insights from my journey as a software
          engineer. Deep dives into web technologies, architecture patterns, and
          the occasional debugging war story.
        </p>
      </section>

      {/* Posts Grid */}
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className={`${styles.postCard} post-card`}
          >
            <IoArrowForward className={styles.postArrow} />
            <div className={styles.postMeta}>
              <span className={styles.postDate}>{formatDate(post.date)}</span>
              <span className={styles.postReadTime}>
                {getReadTime(post.content)}
              </span>
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDescription}>{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
