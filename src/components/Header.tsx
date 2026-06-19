"use client";

import Link from "next/link"; 
import Image from "next/image"; 
import { useState } from "react"; 
import { Menu, X } from "lucide-react";

export default function Header() { 
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return ( 
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-black/5"> 
      
      {/* Container Geral (Garante alinhamento em todas as telas) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo (Sempre visível, tanto desktop quanto mobile) */} 
        <Link href="/" className="flex items-center gap-3 group"> 
          <div className="relative w-24 h-12"> 
            <Image 
              src="/logo/logo.png" 
              alt="Logo Espetos Gepeto" 
              fill 
              className="object-contain group-hover:scale-110 transition-transform duration-300" 
            /> 
          </div> 
          <span className="font-poppins font-bold text-lg text-black inline-block"> 
            Espetos Gepeto 
          </span> 
        </Link> 

        {/* Links Desktop (Apenas telas médias para cima) */} 
        <nav className="hidden md:flex items-center gap-8"> 
          <Link href="/" className="font-inter text-sm font-medium text-black/70 hover:text-orange-600 transition-colors relative group"> 
            Início 
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span> 
          </Link> 
          <Link href="/produtos" className="font-inter text-sm font-medium text-black/70 hover:text-orange-600 transition-colors relative group"> 
            Cardápio 
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span> 
          </Link> 
          <Link href="/contato" className="font-inter text-sm font-medium text-black/70 hover:text-orange-600 transition-colors relative group"> 
            Contato 
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span> 
          </Link> 
        </nav> 

        {/* Botão Mobile - Hambúrguer (Apenas telas pequenas) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-black hover:text-orange-600 transition-colors z-50"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        > 
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} 
        </button> 
      </div>

      {/* Menu Mobile Lateral/Dropdown */} 
      {isOpen && ( 
        <nav className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-8 flex flex-col space-y-6 items-center justify-center z-40"> 
          <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 hover:text-orange-600 transition-colors" > 
            Início 
          </Link> 
          <Link href="/produtos" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 hover:text-orange-600 transition-colors" > 
            Cardápio 
          </Link> 
          <Link href="/contato" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 hover:text-orange-600 transition-colors" > 
            Contato 
          </Link> 
        </nav> 
      )} 
    </header> 
  ); 
}