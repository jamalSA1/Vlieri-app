import { products } from "@wix/stores";
import Link from "next/link";
import {media as wixMedia} from "@wix/sdk"
import WixImage from "./WixImage";
import { formatCurrency } from "@/lib/utils";
import Badge from "./ui/badge";
import DiscountBadge from "./DiscountBadge";

interface ProductProps {
  product: products.Product;
}

export default function Product({product}: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  return <Link href={`products/${product.slug}`} className="flex flex-col gap-2 w-full">
    <div className="overflow-hidden rounded-sm relative">
    <WixImage mediaIdentifier={mainImage?.url} alt={mainImage?.altText} width={700} height={700} className="rounded-sm transition-transform duration-300 hover:scale-105" />
    <div className="absolute top-3 right-3 flex flex-wrap items-center gap-2 rounded-md">
          {product.ribbon && <Badge className="-pb-0 pt-2 rounded-md">{product.ribbon}</Badge>}
        </div>

    </div>

    <div className="flex flex-col items-end text-end">
    <h3 className="text-gray-700 text-sm line-clamp-2">{product.name}</h3>
    <div className="flex items-center">
    <Badge className="font-semibold text-lg text-black bg-white text-end">
      {getFormattedPrice(product)}
    </Badge>
      {product.discount && <DiscountBadge data={product.discount} />}
    </div>

    </div>

  </Link>;
}

function getFormattedPrice(product: products.Product) {
  const minPrice = product.priceRange?.minValue;
  const maxPrice = product.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `من ${formatCurrency(minPrice, product.priceData?.currency)}`;
  } else {
    return (
      product.priceData?.formatted?.discountedPrice ||
      product.priceData?.formatted?.price ||
      "n/a"
    );
  }
}
