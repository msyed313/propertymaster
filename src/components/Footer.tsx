import { type FC } from "react";
import { NavLink } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home,
  FileText,
  MessageSquare,
  Shield,
  Send,
  CreditCard,
  Calendar,
  ChevronRight
} from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                PM
              </div>
              <h2 className="text-2xl font-bold">Property Masterz</h2>
            </div>
            <p className="text-gray-300">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, landlords, and tenants across the UK.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/", icon: <Home size={16} /> },
                { name: "Properties for Sale", path: "/buy", icon: <Home size={16} /> },
                { name: "Properties to Let", path: "/lettings", icon: <Home size={16} /> },
                { name: "Blog", path: "/blog", icon: <FileText size={16} /> },
                { name: "Testimonials", path: "/testimonials", icon: <MessageSquare size={16} /> },
                { name: "Contact us", path: "/contact", icon: <Phone size={16} /> },
                { name: "Privacy Policy", path: "/privacy", icon: <Shield size={16} /> },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-blue-400 transition duration-200 flex items-center gap-2 ${
                        isActive ? "text-blue-500 font-semibold" : "text-gray-300"
                      }`
                    }
                  >
                    <span className="text-blue-500">{link.icon}</span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-600 inline-block flex items-center gap-2">
              <Clock size={20} />
              Working Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-gray-300 flex items-center gap-2">
                  <Calendar size={14} />
                  Monday - Friday
                </span>
                <span className="font-semibold text-green-400">11:00 am - 5:30 pm</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-gray-300 flex items-center gap-2">
                  <Calendar size={14} />
                  Saturday
                </span>
                <span className="font-semibold text-blue-400">11:00 am - 2:00 pm</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center gap-2">
                  <Calendar size={14} />
                  Sunday
                </span>
                <span className="font-semibold text-red-400">Closed</span>
              </li>
            </ul>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                <Phone size={14} />
                Emergency Contact
              </p>
              <p className="font-bold text-blue-400">020 8911 0849</p>
            </div>
          </div>

          {/* Address & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block flex items-center gap-2">
              <MapPin size={20} />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:info@propertymasterz.co.uk" className="text-blue-400 hover:text-blue-300 transition">
                    info@propertymasterz.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:02089110849" className="text-green-400 hover:text-green-300 transition">
                    020 8911 0849
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-700 p-2 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-gray-300">
                    392 Ilford Lane,<br />
                    Ilford, Essex,<br />
                    IG1 2NB
                  </p>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-gray-400 mb-2 flex items-center gap-2">
                <Send size={16} />
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-4 py-2 rounded-r-lg font-semibold transition duration-300 flex items-center gap-2">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Property Masterz UK LTD. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">
                  <ChevronRight size={12} />
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">
                  <ChevronRight size={12} />
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">
                  <ChevronRight size={12} />
                  Cookie Policy
                </a>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <CreditCard size={16} />
                We accept:
              </span>
              <div className="flex gap-2">
                <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold">VISA</div>
                <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold">MC</div>
                <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold">AMEX</div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">BACS</div>
              </div>
            </div>
          </div>
          
          {/* Large Company Name */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="text-center">
              <div className="text-6xl font-bold tracking-wider mb-2 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                PROPERTY MASTERZ
              </div>
              <p className="text-gray-500">UK LTD</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;