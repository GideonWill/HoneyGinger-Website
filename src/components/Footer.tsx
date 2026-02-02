import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-brand-green text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4">
              <img
                src="/images/joy/logo.jpeg"
                alt="Joy4Fame Logo"
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-serif italic font-bold">
                  <span className="text-white">Honey</span>{" "}
                  <span className="text-brand-yellow">Ginger</span>
                </span>
                <span className="text-sm font-semibold text-white tracking-wide">Drink</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Premium natural energy drink crafted with the finest honey and fresh ginger.
              Taste the tradition of wellness in every sip.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/Joy4fame-Instant-Honey-Ginger-Drink" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@joy4fame" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/benefits" className="hover:text-white transition-colors">Health Benefits</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Company</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/preparation" className="hover:text-white transition-colors">Perfect Preparation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-yellow shrink-0" />
                <span>Anyaa NIC Off Ablekuma road</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-yellow shrink-0" />
                <a href="https://wa.me/233248511323" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">0248511323 (WhatsApp)</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-yellow shrink-0" />
                <a href="mailto:Joy4fame2020@gmail.com" className="hover:text-white transition-colors text-sm">Joy4fame2020@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Honey Ginger Drink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
