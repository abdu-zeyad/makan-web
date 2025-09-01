import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { linkText: 'سياسة الخصوصية', href: '/privacy-policy' },
    { linkText: 'الشروط والأحكام', href: '/terms' },
    { linkText: 'اتصل بنا', href: '/contact' },
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <div className="relative h-12 sm:h-16 w-32 sm:w-40">
                    <Image
                        src="/images/logo.png"
                        alt="شعار التطبيق"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
