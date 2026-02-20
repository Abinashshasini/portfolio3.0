'use client';
import { useEffect } from 'react';
import styles from './blogs.module.scss';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();
  }, []);

  return (
    <div className={styles.blogLayout}>
      {/* Main Content */}
      <main className={styles.main}>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Abinash Shasini</p>
        <p className={styles.footerTagline}>
          Thoughts, experiments & engineering insights
        </p>
      </footer>
    </div>
  );
}
