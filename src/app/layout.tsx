
import "./globals.css";
import { Figtree } from 'next/font/google'


const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata = {
  title: "My Site",
  description: "Whatever",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body className="font-figtree">{children}</body>
    </html>
  );
}