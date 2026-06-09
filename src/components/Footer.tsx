import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/95 text-white px-4 md:px-8 lg:px-12 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-15 h-10">
                <Image
                  src="/logo/logo.png"
                  alt="Logo Espetos Gepeto"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-poppins font-bold text-lg text-orange-600">Gepeto</span>
            </div>
            <p className="font-inter text-sm text-white/70">
              Espetos grelhados na brasa com sabor de verdade. Ingredientes frescos e preparação artesanal.
            </p>
          </div>

          {/* Coluna 2: Menu */}
          <div>
            <h4 className="font-poppins font-600 text-white mb-4">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="font-inter text-sm text-white/70 hover:text-orange-600 transition-colors">Início</Link></li>
              <li><Link href="/produtos" className="font-inter text-sm text-white/70 hover:text-orange-600 transition-colors">Cardápio</Link></li>
              <li><Link href="/contato" className="font-inter text-sm text-white/70 hover:text-orange-600 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-poppins font-600 text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="font-inter text-sm text-white/70">📞 (xx) xxxxx-xxxx</li>
              <li className="font-inter text-sm text-white/70">📧 contato@espetogepeto.com</li>
              <li className="font-inter text-sm text-white/70">📍 Rua dos Espetos, 123</li>
            </ul>
          </div>

          {/* Coluna 4: Horários */}
          <div>
            <h4 className="font-poppins font-600 text-white mb-4">Horários</h4>
            <ul className="space-y-2">
              <li className="font-inter text-sm text-white/70">Seg-Qui: 11h - 22h</li>
              <li className="font-inter text-sm text-white/70">Sex-Sab: 11h - 23h</li>
              <li className="font-inter text-sm text-white/70">Domingo: 11h - 21h</li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-white/50">&copy; {currentYear} Espetos Gepeto. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-orange-600 transition-colors">Instagram</a>
              <a href="#" className="text-white/50 hover:text-orange-600 transition-colors">Facebook</a>
              <a href="#" className="text-white/50 hover:text-orange-600 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
