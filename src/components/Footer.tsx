import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-green text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center">
                <span className="text-brand-green font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                HONEY <span className="text-brand-yellow">GINGER</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Premium natural energy drink crafted with the finest honey and fresh ginger. 
              Taste the tradition of wellness in every sip.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-brand-yellow transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-brand-yellow transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-brand-yellow transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#benefits" className="hover:text-white transition-colors">Health Benefits</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Become a Partner</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Support</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-yellow shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-yellow shrink-0" />
                <span>+233 (0) 555 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-yellow shrink-0" />
                <span>info@honeyginger.com</span>
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
