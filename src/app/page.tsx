import { FeatureadProducts } from "@/components/FeatureadProducts";
import HeroSeaction from "@/components/HeroSeaction";
import LoadingSkeleton  from "@/components/LoadingSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 py-10 space-y-10">
      <HeroSeaction />
      <Suspense fallback={<LoadingSkeleton />}>
        <FeatureadProducts />
      </Suspense>
    </main>
  );
}


