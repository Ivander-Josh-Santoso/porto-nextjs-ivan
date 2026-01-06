import Chat from '@/components/Chat';
import ClientTopProgressBar from '@/components/ClientTopProgressBar';
import Navbar from '@/components/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import './nprogress.css';
config.autoAddCss = false;

export const metadata = {
  title: 'IvanderJS | Portofolio',

  description: "My name is IvanderJS, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

  author: 'Ivander Shafelbilyunazra',
  siteUrl: 'https://www.IvanderJS.my.id',
  applicationName: 'IvanderJS',

  keywords: ['IvanderJS', 'Ivander', 'Ivander josh', 'josh', 'Ivander shafelbilyunazra', 'Ivander josh bilyunazra', 'bloodfallen', 'Ivander porto', 'Ivander um'],

  openGraph: {
    type: 'website',
    url: 'https://www.IvanderJS.my.id',
    title: 'IvanderJS | Portofolio',
    site_name: 'IvanderJS | Portofolio',
    description: 'My name is IvanderJS, This is my portofolio website.',
    width: 1200,
    height: 630,
    images: [
      {
        url: '/og-image-rev.png',
        alt: 'IvanderJS Portofolio',
      },
    ],
    site_name: 'IvanderJS | Portofolio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
