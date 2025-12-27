import { useState, useRef, useEffect, type FC } from "react";
import {
  X, Menu
} from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from "react-router-dom";


const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const headerRef = useRef<HTMLHeadElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Scroll hide/show logic
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 50) {
            gsap.to(headerRef.current, {
              y: "-150%",
              duration: 0.7,
              ease: "power2.out",
            });
          } else {
            gsap.to(headerRef.current, {
              y: "0%",
              duration: 0.7,
              ease: "power2.out",
            });
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle menu toggle
  const openMenu = (): void => {
    setIsOpen(!isOpen);
  };

  // GSAP Animation for Menu Card
  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { opacity: 1, duration: 1, y: 0 });
      gsap.to(menuIconRef.current, { duration: 1, x: 130 });
      gsap.to(buttonRef.current, { opacity: 0, duration: 0.2, y: -50 })
    } else {
      gsap.to(menuRef.current, { opacity: 0, duration: 0, y: -50 });
      gsap.to(menuIconRef.current, { rotate: 0, duration: 1, x: 0 });
      gsap.to(buttonRef.current, { opacity: 1, duration: 1, y: 0 })
    }
  }, [isOpen]);

  
 


  return (
    <header ref={headerRef} className="fixed bg-white py-4 px-6 flex items-center justify-between top-5 left-5 right-5 z-50 shadow-lg rounded-3xl h-16">

      {/* Logo */}
      <div className="font-bold flex items-center">
        <p className="text-blue-600 text-xl">Zm<span className="text-green-600">Estates</span></p>
      </div>

      {/* Buttons */}
      <div className="px-4 gap-10 flex justify-around">
        {/* Menu Card */}
        <nav ref={menuRef} className="absolute flex gap-5 text-white p-2 right-36 hidden md:flex">
          <NavLink to="/" className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition">Home</NavLink>
          <NavLink className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition" to="/lettings" >Lettings</NavLink>
            <NavLink className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition" to="/sales" >Sales</NavLink>
          
          <NavLink to="/about" className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition">About Us</NavLink>
          <NavLink to="/contact" className="text-gray-800 font-semibold text-lg hover:text-green-600 transition">Contact Us</NavLink>
        </nav>

        <button 
          ref={menuIconRef}
          onClick={() => {
            if (window.innerWidth >= 768) {
              openMenu();
            } else {
              setMenuOpen(!menuOpen);
            }
          }}
          className="hover:cursor-pointer text-gray-800"
        >
          {isOpen || menuOpen ? <X size={35} /> : <Menu size={35} />}
        </button>

        <NavLink 
          ref={buttonRef}
          to="/login" 
          className="md:block hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Login
        </NavLink>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute md:hidden bg-white shadow-md py-4 left-0 right-0 max-h-[80vh] overflow-y-auto z-50 top-full rounded-2xl">
          <nav className="flex flex-col px-6 space-y-4">
            <NavLink className="text-lg font-semibold text-gray-800 hover:text-blue-600" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink className="text-lg font-semibold text-gray-800 hover:text-blue-600" to="/lettings" onClick={() => setMenuOpen(false)}>Lettings</NavLink>
            <NavLink className="text-lg font-semibold text-gray-800 hover:text-blue-600" to="/sales" onClick={() => setMenuOpen(false)}>Sales</NavLink>
            <NavLink className="text-lg font-semibold text-gray-800 hover:text-blue-600" to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink className="text-lg font-semibold text-gray-800 hover:text-green-600" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-600 hover:bg-blue-700 text-lg font-semibold text-white px-4 py-2 rounded-md w-full transition">
                Login
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;