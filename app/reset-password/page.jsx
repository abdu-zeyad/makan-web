"use client";
import { useState, useEffect } from "react";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    // Extract access_token from URL hash
    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.replace("#", ""));
        const accessToken = params.get("access_token");
        if (accessToken) setToken(accessToken);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!token) {
            setError("رمز الوصول غير موجود");
            return;
        }

        if (password !== confirmPassword) {
            setError("كلمتا المرور غير متطابقتين");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch(
                "https://msydxsmddlishdoecrdr.supabase.co/functions/v1/reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // <-- add token here
                    },
                    body: JSON.stringify({ password }),
                }
            );

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "فشل في إعادة تعيين كلمة المرور");
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message || "حدث خطأ ما");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
                {!success ? (
                    <>
                        <h1 className="text-4xl font-bold mb-4 text-black" dir="rtl">
                            إعادة تعيين كلمة المرور
                        </h1>
                        <p className="max-w-md mb-8 text-lg text-gray-600" dir="rtl">
                            أدخل كلمة المرور الجديدة لتحديث حسابك.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-md flex flex-col gap-4"
                            dir="rtl"
                        >
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="كلمة المرور الجديدة"
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                            />

                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="تأكيد كلمة المرور"
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                            />

                            {error && (
                                <p className="text-red-600 text-sm" dir="rtl">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 text-white bg-blue-600 rounded-2xl shadow-md transition-transform hover:scale-105 hover:bg-blue-700 disabled:opacity-50"
                            >
                                {loading ? "جاري الحفظ..." : "حفظ كلمة المرور"}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl font-bold mb-4 text-green-600" dir="rtl">
                            ✅ تم تحديث كلمة المرور
                        </h1>
                        <p className="max-w-md text-lg text-gray-600" dir="rtl">
                            يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.
                        </p>
                    </>
                )}
            </main>
        </div>
    );
}
