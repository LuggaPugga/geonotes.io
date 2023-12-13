// app/layout.js

import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism, shadesOfPurple } from '@clerk/themes';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './_components/Navbar';
import Gradient from './_components/Gradient';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GeoNotes',
  description: 'Learn the world',
  icons: [{ url: '/favicon.ico', href: '/favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            baseTheme: [neobrutalism],
            signIn: {
              baseTheme: [shadesOfPurple],
              variables: { colorPrimary: 'white' },
            },
          }}
        >
          <Navbar />
          <main
            className="d-flex mh-100vh min-h-screen flex-column align-items-start py-4"
            // min-h-screen is minimum height of the viewport
            // py-4 is padding on the top and bottom
            // align-items-start is aligning the content to the top
          >
            <Gradient />

            {children}
          </main>
        </ClerkProvider>
        <Analytics />
      </body>
    </html>
  );
}
