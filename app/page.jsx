import Link from 'next/link';

export default function Page() {
    return (
        <div className={` flex flex-col min-h-screen bg-gray-50`}>
            {/* Hero Section */}
            <main className='flex flex-col items-center justify-center flex-grow px-6 text-center'>
                <h1 className='text-4xl font-bold mb-4 text-black ' dir='rtl'>
                    مرحبًا بك في <span className='text-blue-600 '>مكان - MAKAN</span>
                </h1>
                <p className='max-w-xl mb-8 text-lg text-gray-600' dir='rtl'>
                    اكتشف واستكشف الأماكن بسهولة. قم بتحميل التطبيق الآن على أجهزة iOS
                    و Android.
                </p>

                {/* Download Buttons */}
                <div className='flex flex-col items-center gap-10 sm:flex-row sm:justify-center'>
                    {/* iOS App Image */}
                    <a
                        href='https://apps.apple.com/app/idXXXXXXXX' // استبدل بالرابط الفعلي
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full sm:w-1/4 flex justify-center'
                    >
                        <img
                            src='/images/ios.png' // ضع الصورة في مجلد public/images
                            alt='تطبيق MAKAN على iOS'
                            className='w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl shadow-lg transition-transform hover:scale-105'
                        />
                    </a>

                    {/* Android App Image */}
                    <a
                        href='https://play.google.com/store/apps/details?id=com.makan.app' // استبدل بالرابط الفعلي
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full sm:w-1/4 flex justify-center'
                    >
                        <img
                            src='/images/android.png' // ضع الصورة في مجلد public/images
                            alt='تطبيق MAKAN على Android'
                            className='w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl shadow-lg transition-transform hover:scale-105'
                        />
                    </a>
                </div>
            </main>
        </div>
    );
}
