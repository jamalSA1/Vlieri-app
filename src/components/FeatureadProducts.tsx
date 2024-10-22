import { getWixClient } from "@/lib/wix-client.base";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Product from "./Product";

export async function FeatureadProducts() {
  const wixClient = getWixClient();
  const {collection} = await wixClient.collections.getCollectionBySlug("all-products")

  if (!collection) {
    return null
  }

  const products = await wixClient.products.queryProducts().hasSome("collectionIds", [collection._id]).descending("lastUpdated").find()

  if (!products.items.length) {
    return null
  }

  return <>
  <div className="space-y-5 text-end">
      <MaxWidthWrapper>
    <h2 className="font-bold text-2xl">جميع المنتجات</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-5">
      {products.items.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
      </MaxWidthWrapper>
  </div>
  </>

}