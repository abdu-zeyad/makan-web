export default function DeleteAccount() {
    return (
        <div className="px-6 py-12 mx-auto leading-relaxed bg-white min-h-screen" dir="rtl" lang="ar">
            <h1 className="text-3xl font-bold mb-6">حذف الحساب</h1>

            <p className="text-gray-700 mb-6">
                إذا كنت ترغب في حذف حسابك من تطبيق <strong>مكان - MAKAN</strong>، يرجى اتباع الخطوات التالية على هاتفك المحمول.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">الخطوات</h2>
                <p className="text-gray-700 mb-6">
                    افتح التطبيق وانتقل إلى <strong>الإعدادات &gt; إدارة الحساب</strong> ثم اختر <strong>حذف الحساب</strong> وأكد العملية.
                </p>

                {/* الصور جنب بعض */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <img
                        src="/images/delete2.png"
                        alt="الخطوة الأولى لحذف الحساب"
                        className="w-40 sm:w-48 rounded-lg shadow-md"
                    />
                    <img
                        src="/images/delete1.png"
                        alt="الخطوة الثانية لحذف الحساب"
                        className="w-40 sm:w-48 rounded-lg shadow-md"
                    />
                </div>
            </section>

            <p className="text-gray-700">
                بعد إتمام هذه الخطوات سيتم حذف حسابك وجميع بياناتك بشكل نهائي من التطبيق. إذا واجهت أي مشكلة يمكنك التواصل معنا عبر البريد الإلكتروني:
                <br />
                <a href="mailto:makan.service.app@gmail.com" className="text-blue-600 underline">
                    makan.service.app@gmail.com
                </a>
            </p>
        </div>
    );
}
