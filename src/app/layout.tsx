import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const roboto = localFont({
  src: [
    {
      path: '../../public/assets/fonts/OverusedGrotesk-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/OverusedGrotesk-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/OverusedGrotesk-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/OverusedGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Abinash Shasini Software Developer',
  description: "Abinash shasini's personal portfolio websit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <svg className="grainyBg">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
