import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function LoadingSkeleton() {
  return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-5 pt-12">
      <div className="flex flex-col gap-2 w-full">
      <div className="overflow-hidden w-full mx-auto">
    <Skeleton className="bg-gray-900 w-full" />
      </div>
    <div className="flex justify-between items-center text-end">
    <Skeleton className="bg-gray-600 w-full" />
    </div>
  </div>
  </div>
}
