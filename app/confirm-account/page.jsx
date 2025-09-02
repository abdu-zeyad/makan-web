import Link from 'next/link';

export default function ConfirmAccountPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero Section */}
            <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
                <h1 className="text-4xl font-bold mb-4 text-black" dir="rtl">
                    🎉 تم إنشاء حسابك بنجاح!
                </h1>
                <p className="max-w-xl mb-8 text-lg text-gray-600" dir="rtl">
                    شكرًا لانضمامك إلى <span className="text-blue-600">مكان - MAKAN</span>.
                    يمكنك الآن تسجيل الدخول والبدء في استكشاف الأماكن بسهولة.
                </p>

                {/* Actions */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    {/* <Link
                        href="/login"
                        className="px-6 py-3 text-white bg-blue-600 rounded-2xl shadow-md transition-transform hover:scale-105 hover:bg-blue-700"
                    >
                        تسجيل الدخول
                    </Link> */}
                    <Link
                        href="/"
                        className="px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-2xl shadow-md transition-transform hover:scale-105 hover:bg-gray-100"
                    >
                        العودة إلى الصفحة الرئيسية
                    </Link>
                </div>
            </main>
        </div>
    );
}
