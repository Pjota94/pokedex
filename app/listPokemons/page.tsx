import CardPokemon from "@/components/CardPokemon";
import Search from "@/components/Search";

interface Pokemon {
  name: string;
  url: string;
}

const fetchData = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151`,
    {}
  );
  return response.json();
};

export default async function ListPokemons() {
  const data = await fetchData();

  return (
    <>
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
    </>
  );
}
