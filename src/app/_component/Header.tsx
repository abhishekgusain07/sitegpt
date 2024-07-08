import Image from "next/image"
import Link from "next/link"

const options = ['Features', 'Integrations', 'Pricing', 'Live Demo', 'Blog'];
const Header = () => {
    return (
        <header className="sticky z-50 bg-white/90 backdrop-blur-lg inset-x-0 top-0 border-b border-gray-100 py-3">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                <div className="shrink-0">
                    <Link href="/" className="flex items-center">
                    <Image
                        src="https://sitegpt.ai/cdn-cgi/imagedelivery/hQTLE0NTlcNyb_tOYFnnyA/e3888de9-3054-40f4-6699-889189a48500/square"
                        alt=""
                        width={28}
                        height={28}
                        className="h-6 w-auto md:h-7"
                    />
                    </Link>
                </div>
                <div className="hidden items-center justify-center gap-4 lg:flex">
                    {options.map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="text-sm font-semibold leading-5 transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-950 hover:bg-gray-100 hover:text-blue-600"
                    >
                        {item}
                    </Link>
                    ))}
                </div>
                <div className="flex items-center justify-end gap-4">
                    <Link
                    href="/partners"
                    className="hidden items-center justify-center bg-white text-sm font-semibold leading-5 text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 transition-all duration-150 rounded-lg px-3 py-1.5 hover:bg-blue-50 sm:inline-flex"
                    >
                    Become a partner
                    </Link>
                    <Link
                    href="/login"
                    className="inline-flex items-center justify-center bg-white text-sm font-semibold leading-5 text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 transition-all duration-150 rounded-lg px-3 py-1.5 hover:bg-blue-50"
                    >
                    Sign In
                    </Link>
                    <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center bg-blue-600 text-sm font-semibold leading-5 text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-1.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                    Start a free trial
                    </Link>
                </div>
                </div>
            </div>
      </header>
    )
}
export default Header

