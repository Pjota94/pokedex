import CardPokemon from "@/components/CardPokemon";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <div className="w-full flex justify-center">
        <section className="w-[819px] flex justify-center gap-2 flex-wrap mt-20">
          {data.results.map((pokemon: Pokemon) => (
            <CardPokemon
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </section>
      </div>
    </>
  );
}
