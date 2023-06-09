import Button from "@/components/Button";
import CardPokemon from "@/components/CardPokemon";
import Search from "@/components/Search";

interface Pokemon {
  name: string;
  url: string;
}

const fetchData = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=21`,
    {}
  );
  return response.json();
};

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <h1 className="font-semibold text-4xl text-center mt-12 mb-5">Pokédex</h1>
      <p className="font-semibold text-sm text-center mb-5 text-[#2E3057]">
        Search for a Pokémon by name or using its National Pokédex number.
      </p>
      <div className="w-full flex justify-center mb-10">
        <Search />
      </div>
      <div className="w-full flex justify-center mb-5">
        <section className="w-[819px] flex justify-center gap-2 flex-wrap">
          {data.results.map((pokemon: Pokemon) => (
            <CardPokemon
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </section>
      </div>
      <div className="w-full flex justify-center mb-10">
        <Button />
      </div>
    </>
  );
}
