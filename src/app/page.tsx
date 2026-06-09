import Carrossel from "@/components/Carrosel"
import CardProduto from "@/components/CardProduto"
import Link from "next/link"
import produtos from "../../produtos.json"

export default function Home() {

  const produtosDestsaque = produtos.filter(
    (produto) => produto.destaque === true
  )

  return (
    <div className="w-full bg-white">
      {/* Padding para navbar fixa */}
      <div className="pt-20"></div>

      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="font-poppins font-800 text-5xl md:text-6xl text-black leading-tight">
                  Espetos feitos na brasa com sabor de verdade.
                </h1>
                <p className="font-inter text-lg text-black/60">
                  Ingredientes frescos, preparação artesanal e atendimento de qualidade em cada pedido.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
            
                <Link href="/produtos" className="font-poppins font-600 text-base px-8 py-3.5 bg-white hover:bg-neutral-50 text-black border-2 border-black/10 rounded-full transition-all duration-300">
                  Ver Cardápio
                </Link>
              </div>
            </div>

            {/* Elemento Visual */}
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-300/5 flex items-center justify-center">
              <div className="text-6xl"><img src="/logo/logo.png"/></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-2 mb-12">
            <h2 className="font-poppins font-700 text-4xl text-black">
              Produtos em Destaque
            </h2>
            <p className="font-inter text-base text-black/60">
              Os favoritos dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {produtosDestsaque.map((produto) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                title={produto.title}
                description={produto.description}
                price={produto.price}
                imageSrc={produto.imageSrc}
                destaque={produto.destaque}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/produtos" className="inline-block font-poppins font-600 text-base px-8 py-3.5 bg-black hover:bg-black/80 text-white rounded-full transition-all duration-300 hover:shadow-lg">
              Ver Todos os Produtos →
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-2 mb-12">
            <h2 className="font-poppins font-700 text-4xl text-black">
              Por que Espetos Gepeto?
            </h2>
            <p className="font-inter text-base text-black/60">
              Qualidade e compromisso em cada detalhe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔥", title: "Ingredientes Selecionados", desc: "Qualidade premium em cada espeto" },
              { icon: "👨‍🍳", title: "Preparação Artesanal", desc: "Técnica tradicional de grelha na brasa" },
              { icon: "⚡", title: "Entrega Rápida", desc: "Pedidos entregues fresquinhos" },
              { icon: "⭐", title: "Atendimento Premium", desc: "Você é nossa prioridade" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white border border-black/5 rounded-xl hover:border-orange-600/30 hover:shadow-md transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-poppins font-600 text-lg text-black mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-poppins font-800 text-4xl md:text-5xl">
            Pronto para experimentar?
          </h2>
          <p className="font-inter text-lg text-white/70">
            Peça agora e receba os melhores espetos da região em sua casa.
          </p>
        
        </div>
      </section>
    </div>
  )
}