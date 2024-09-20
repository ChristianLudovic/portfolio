import localFont from 'next/font/local';
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: "swap",
 });

 const Satoshi = localFont({
  src: [
    {
      path: '../public/font/Satoshi/Satoshi-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/font/Satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/font/Satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/font/Satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/Satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal'
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
 })

export const metadata = {
  title: "ChrisFacile_Dev",
  description: "Mon portfolio personnel pour vous présenter mes compétences en développement web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Satoshi.className}>{children}</body>
    </html>
  );
}
