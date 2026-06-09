import produtos from "../../../produtos.json"
import CardProduto from "@/components/CardProduto"

export default function Produtos() {
  return (
    <div className="w-full bg-white">
      {/* Padding para navbar fixa */}
      <div className="pt-20"></div>

      <div className="min-h-screen py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header da Página */}
          <div className="space-y-2 mb-12">
            <h1 className="font-poppins font-800 text-4xl md:text-5xl text-black">
              Nosso Cardápio
            </h1>
            <p className="font-inter text-lg text-black/60">
              Conheça todos os nossos deliciosos espetos grelhados na brasa
            </p>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((produto) => (
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

          {/* CTA Final */}
          <div className="mt-16 text-center py-12 bg-neutral-50 rounded-2xl">
            <h2 className="font-poppins font-700 text-2xl text-black mb-3">
              Não encontrou o que procura?
            </h2>
            <p className="font-inter text-base text-black/60 mb-6">
              Oferecemos opções personalizadas e combos especiais sob encomenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}