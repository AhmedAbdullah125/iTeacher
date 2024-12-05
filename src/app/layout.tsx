//Edited date :14/10/2024
//change Main layout structure
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '../css/main.css';
import '../css/fontawesome.min.css';

export const metadata: Metadata = {
  title: 'iTeacher',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id='root'>
      <body className="w-full" suppressHydrationWarning={true}>
        <div className="bodyCont ">
          <div className="body-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}