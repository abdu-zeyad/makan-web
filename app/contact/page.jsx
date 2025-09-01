export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col px-6 py-12 mx-auto bg-white" dir="rtl" lang="ar">
            <h1 className="text-3xl font-bold mb-6">اتصل بنا</h1>

            <p className="text-gray-700 mb-4">
                إذا كان لديك أي أسئلة، اقتراحات أو استفسارات بخصوص تطبيق <strong>مكان - MAKAN</strong>، يمكنك التواصل معنا عبر الطرق التالية:
            </p>

            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>
                    البريد الإلكتروني:{" "}
                    <a href="mailto:location.tracker.find.family@gmail.com" className="text-blue-600 underline">
                        location.tracker.find.family@gmail.com
                    </a>
                </li>
                <li>رقم الهاتف: +962 XXXXXX (أدخل الرقم هنا)</li>
                <li>
                    من خلال نموذج الاتصال: <a href="/contact-form" className="text-blue-600 underline">اضغط هنا</a>
                </li>
            </ul>

            <a href="mailto:makan.service.app@gmail.com" className="text-blue-600 underline">
                makan.service.app@gmail.com
            </a>
        </div>
    );
}
