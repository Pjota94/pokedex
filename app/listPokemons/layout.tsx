import Search from "@/components/Search";

export const metadata = {
  title: "Pokemon",
  description: "Page pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="font-semibold text-4xl text-center mt-12 mb-5">Pokédex</h1>
      <p className="font-semibold text-sm text-center mb-5 text-[#2E3057]">
        Search for a Pokémon by name or using its National Pokédex number.
      </p>
      <div className="w-full flex justify-center mb-10">
        <Search />
      </div>
      {children}
    </div>
  );
}
