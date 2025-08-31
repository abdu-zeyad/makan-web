import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';



export default function Page() {
    return (
        <div className='flex flex-col min-h-screen bg-gray-50'>
            {/* Hero Section */}
            <main className='flex flex-col items-center justify-center flex-grow px-6 text-center'>
                <h1 className='text-4xl font-bold mb-4'>
                    Welcome to <span className='text-blue-600'>MAKAN - مكان</span>
                </h1>
                <p className='max-w-xl mb-8 text-lg text-gray-600'>
                    Discover and explore places with ease. Download the app now on iOS and
                    Android.
                </p>

                {/* Download Buttons */}
                <div className='flex flex-col items-center gap-10 sm:flex-row sm:justify-center'>
                    {/* iOS App Image */}
                    <a
                        href='https://apps.apple.com/app/idXXXXXXXX' // Replace with actual iOS link
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full sm:w-1/4 flex justify-center'
                    >
                        <img
                            src='/images/ios.png' // Place in public/images
                            alt='MAKAN iOS App'
                            className='w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl shadow-lg transition-transform hover:scale-105'
                        />
                    </a>

                    {/* Android App Image */}
                    <a
                        href='https://play.google.com/store/apps/details?id=com.makan.app' // Replace with actual Android link
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full sm:w-1/4 flex justify-center'
                    >
                        <img
                            src='/images/android.png' // Place in public/images
                            alt='MAKAN Android App'
                            className='w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl shadow-lg transition-transform hover:scale-105'
                        />
                    </a>
                </div>
            </main>


        </div>
    );
}

