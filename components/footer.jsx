import Link from 'next/link';

export function Footer() {
    return (
        <footer className='w-full px-4 py-6 border-t bg-white shadow-inner'>
            <div className='flex flex-col items-center justify-between gap-4 mx-auto text-sm text-gray-500 max-w-7xl sm:flex-row'>
                <p>&copy; {new Date().getFullYear()} MAKAN. All rights reserved.</p>
                <div className='flex gap-6'>
                    <a
                        href='/privacy-policy'
                        className='hover:text-blue-600 transition-colors'
                    >
                        Privacy Policy
                    </a>
                    <a href='/terms' className='hover:text-blue-600 transition-colors'>
                        Terms of Service
                    </a>
                    <a
                        href='/contact'
                        className='hover:text-blue-600 transition-colors'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
