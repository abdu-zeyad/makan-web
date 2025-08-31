import '../styles/globals.css';
import { Footer } from '../components/footer';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className=" ">
                    {/* <Header /> */}
                    <main className="grow">{children}</main>
                    <Footer />

                </div>
            </body>
        </html>
    );
}
