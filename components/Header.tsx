import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          WebTech Solutions
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="text-gray-600 hover:text-primary">Services</Link></li>
            <li><Link href="#features" className="text-gray-600 hover:text-primary">Features</Link></li>
            <li><Link href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</Link></li>
            <li><Button asChild><Link href="#contact">Contact Us</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}