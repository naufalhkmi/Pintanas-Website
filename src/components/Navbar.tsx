import Link from "next/link";
import { Menu } from "lucide-react"; // Hamburger icon for mobile

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Pintanas Utama
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Sdn. Bhd.
              </span>
            </Link>
          </div>

          {/* RIGHT: Desktop Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-green-700 font-medium transition">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-green-700 font-medium transition">
              Services
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-green-700 font-medium transition">
              Projects
            </Link>
            <Link href="/contact" className="px-5 py-2.5 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition shadow-sm">
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Visible only on small screens) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}