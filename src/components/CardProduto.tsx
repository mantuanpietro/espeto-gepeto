import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface CardProdutoProps {
  id: string | number;
  title: string;
  description?: string | null;
  price: number;
  imageSrc?: string | null;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="relative overflow-hidden border border-black/10 bg-white hover:border-orange-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 group">
      {/* Badge Destaque */}
      {destaque && (
        <div className="absolute top-4 right-4 z-30">
          <Badge className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
            Destaque
          </Badge>
        </div>
      )}

      {/* Imagem */}
      <div className="relative w-full h-64 bg-neutral-100 overflow-hidden">
        <Image
          src={imageSrc || "/images/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Conteúdo */}
      <CardHeader className="pb-3">
        <CardTitle className="font-poppins font-700 text-lg text-black">{title}</CardTitle>
        <CardDescription className="font-inter text-sm text-black/60 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button className="w-full font-poppins font-600 bg-orange-600 hover:bg-orange-700 text-white h-11 transition-all duration-300">
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}
