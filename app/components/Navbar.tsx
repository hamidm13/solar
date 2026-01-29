import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl text-yellow-500 tracking-tighter">
              SOLAR<span className="text-gray-900 dark:text-white">TECH</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="/#contact" className="bg-yellow-500 hover:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-yellow-500/30">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
