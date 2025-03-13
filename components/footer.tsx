import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-800 py-12">
    <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">VTechnologies</h3>
        <p className="text-sm text-gray-300">
          Empowering students with cutting-edge skills in web development and modern technologies since 2010.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-300 hover:text-white">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Courses</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
          <li>
            <Link href="/courses/react-js" className="hover:underline">
              React JS
            </Link>
          </li>
          <li>
            <Link href="/courses/angular-js" className="hover:underline">
              Angular JS
            </Link>
          </li>
          <li>
            <Link href="/courses/vue-js" className="hover:underline">
              Vue JS
            </Link>
          </li>
          <li>
            <Link href="/courses/mern-stack" className="hover:underline">
              MERN Stack
            </Link>
          </li>
          
          <li>
            <Link href="/courses/java-full-stack" className="hover:underline">
              Java Full Stack
            </Link>
          </li>
          <li>
            <Link href="/courses/reasoning-aptitude" className="hover:underline">
              Aptitude And Reasoning
            </Link>
          </li>
        </ul>
      </div>
  
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Locations</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>
            <Link href="/locations#new-york" className="hover:underline">
              India
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Contact</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>India</li>
          <li>Email: vtchnlgs@gmail.com</li>
          <li>Phone: +91 8919615299</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">About</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 border-t pt-8 px-4 md:px-6">
      <p className="text-center text-sm text-gray-300">
        © {new Date().getFullYear()} VTechnologies. All rights reserved.
      </p>
    </div>
  </footer>
  
  )
}

