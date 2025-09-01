import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Cairo } from 'next/font/google'
import { Header } from '../components/header';

const cairo = Cairo({ subsets: ['arabic', 'latin'] })

export const metadata = {
    title: 'MAKAN',
    description: 'اكتشف واستكشف الأماكن بسهولة',
}


export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className={`${cairo.className} antialiased text-white bg-blue-900`}>
                <div className=" ">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />

                </div>
            </body>
        </html>
    );
}
