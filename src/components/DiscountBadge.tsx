import { products } from "@wix/stores";
import Badge from "./ui/badge";

interface DiscountBadgeProps {
  data: products.Discount;
}

export default function DiscountBadge({ data }: DiscountBadgeProps) {
  if (data.type !== "PERCENT") {
    return null;
  }

  return <>
  <Badge className="bg-transparent text-sm text-gray-400 p-0 relative line-through">{data.value}.00ريال</Badge>
  </>
}