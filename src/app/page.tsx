

// import { HeroSection } from "../../components/Hero/page";
// import PcbManufacturingSection from "../../components/mainpagecontent";


// export default function Home() {
//   return (
//     <main className="overflow-hidden bg-white">
 
//       {/* Space reserved for fixed TopBar + Header */}
//       <div className="h-[140px]" />

//       <HeroSection />
//        <PcbManufacturingSection />
        
//     </main>
//   );
// }


import { HeroSection } from "../../components/Hero/page";
import PcbManufacturingSection from "../../components/mainpagecontent";
import { SearchResults } from "../../components/SearchResults";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    s?: string;
  }>;
}) {
  const params = await searchParams;
  const searchQuery = params.s?.trim();

  // Show search results when ?s= is present
  if (searchQuery) {
    return (
      <main className="overflow-hidden bg-white">
        <div className="h-[140px]" />

        <SearchResults query={searchQuery} />
      </main>
    );
  }

  // Normal homepage
  return (
    <main className="overflow-hidden bg-white">

      {/* Space reserved for fixed TopBar + Header */}
      <div className="h-[140px]" />

      <HeroSection />

      <PcbManufacturingSection />

    </main>
  );
}