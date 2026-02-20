/** @type {import('next').NextConfig} */
const nextConfig = {
  // In 2026, Next.js uses Turbopack by default
};

// Simple hook to run Velite when you start the dev server
if (process.env.NODE_ENV === 'development') {
  const { build } = await import('velite');
  await build({ watch: true });
}

export default nextConfig;
