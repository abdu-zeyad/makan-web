export default function TermsOfService() {
    return (
        <div className="px-6 py-12 mx-auto leading-relaxed bg-white" dir="rtl" lang="ar">
            <h1 className="text-3xl font-bold mb-6">شروط الخدمة</h1>

            <p className="text-gray-700 mb-4">
                آخر تحديث: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
                <p className="text-gray-700 mb-4">
                    هذه الشروط توضح القواعد والالتزامات التي يجب على المستخدمين الالتزام بها عند استخدام تطبيق <strong>مكان - MAKAN</strong>.
                </p>

                <p className="text-gray-700 mb-4">
                    باستخدامك للتطبيق، فإنك توافق على هذه الشروط بالكامل. إذا كنت لا توافق على أي جزء منها، يجب عليك التوقف عن استخدام التطبيق فورًا.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">الاستخدام المسموح به</h2>
                <p className="text-gray-700 mb-4">
                    يُسمح باستخدام التطبيق للأغراض الشخصية فقط. يُمنع استخدام التطبيق لأي غرض تجاري أو غير قانوني أو أي نشاط قد يضر بالتطبيق أو مستخدميه.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">الملكية الفكرية</h2>
                <p className="text-gray-700 mb-4">
                    جميع المحتويات في التطبيق، بما في ذلك النصوص والصور والرموز والشعارات والبرمجيات، هي ملكية <strong>مكان - MAKAN</strong> أو الجهات المانحة للترخيص، ولا يجوز نسخها أو استخدامها بدون إذن.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">الخصوصية</h2>
                <p className="text-gray-700 mb-4">
                    نحن نحترم خصوصيتك. يرجى الاطلاع على <a href="/privacy-policy" className="text-blue-600 underline">سياسة الخصوصية</a> لمعرفة كيفية جمع ومعالجة بياناتك.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">المسؤولية</h2>
                <p className="text-gray-700 mb-4">
                    التطبيق يُقدَّم كما هو دون أي ضمانات. نحن لا نضمن دقة المعلومات أو توفر التطبيق باستمرار. أي استخدام للتطبيق يكون على مسؤوليتك الخاصة.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">روابط لمواقع خارجية</h2>
                <p className="text-gray-700 mb-4">
                    قد يحتوي التطبيق على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى هذه المواقع أو سياسات الخصوصية الخاصة بها.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">تعديلات الشروط</h2>
                <p className="text-gray-700 mb-4">
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إعلامك بأي تغييرات كبيرة عبر التطبيق أو البريد الإلكتروني.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">اتصل بنا</h2>
                <p className="text-gray-700">
                    إذا كانت لديك أي أسئلة حول هذه الشروط، يمكنك التواصل معنا عبر البريد الإلكتروني:
                    <br />
                    <a href="mailto:makan.service.app@gmail.com" className="text-blue-600 underline">
                        makan.service.app@gmail.com
                    </a>
                </p>
            </section>
        </div>
    );
}
