import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import { Menu } from "lucide-react";

const =

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-25 h-12">
            <Image
              src="/logo/logo.png"
              alt="Logo Espetos Gepeto"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-poppins font-bold text-lg text-black hidden sm:inline-block">
            Espetos Gepeto
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <Link href="/" className="font-inter text-sm font-500 text-black/70 hover:text-orange-600 transition-colors relative group">
            Início
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/produtos" className="font-inter text-sm font-500 text-black/70 hover:text-orange-600 transition-colors relative group">
            Cardápio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contato" className="font-inter text-sm font-500 text-black/70 hover:text-orange-600 transition-colors relative group">
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
        </div>
      </nav>
    </header>
  );
}
