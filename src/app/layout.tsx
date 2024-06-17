import { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';

import { Providers } from '@providers/providers.tsx';

import '@styles/global.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'B2i Healthcare Homework',
  description: 'SNOMED CT Quick Search Component',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <body className={'bg-gray-300 pt-8'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
