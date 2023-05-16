import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cores } from "@/assets/colors";
import Infos from "@/components/Infos";

const fetchDataId = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return response.json();
};

const fetchDataDescription = async (name: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );

  return response.json();
};

export default async function Pokemon({
  params,
}: {
  params: { pokemon: string };
}) {
  const { pokemon } = params;

  const dataPokemon = await fetchDataId(pokemon);
  const descriptionPokemon = await fetchDataDescription(pokemon);
  const Img = dataPokemon.sprites.other;

  return (
    <>
      <Link href={"/listPokemons"} className="w-full text-[#2E3057]">
        <ArrowLeft
          size={50}
          className="mt-10 ml-16 hover:text-[#2E3057E0] max-[810px]:mt-[1.2rem] max-[810px]:ml-[6px]"
        />
      </Link>
      <h1 className="text-center text-2xl font-semibold capitalize">
        {dataPokemon.name}
      </h1>
      {dataPokemon.id < 10 && (
        <p className="text-center font-normal mt-2 text-[16px]">
          00{dataPokemon.id}
        </p>
      )}
      {dataPokemon.id > 10 && dataPokemon.id < 100 && (
        <p className="text-center font-normal mt-2 text-[16px]">
          0{dataPokemon.id}
        </p>
      )}
      {dataPokemon.id > 10 && dataPokemon.id > 100 && (
        <p className="text-center font-normal mt-2 text-[16px]">
          {dataPokemon.id}
        </p>
      )}
      <section className="w-full flex justify-center gap-[3rem] max-[810px]:flex-col max-[810px]:items-center max-[810px]:gap-[0px]">
        <div
          style={{
            backgroundColor: `${cores[dataPokemon.types[0].type.name]}`,
          }}
          className="flex justify-center items-center mt-10 w-[22.375rem] h-[18.438rem] rounded-lg group overflow-hidden max-[810px]:w-[21.375rem] max-[810px]:h-[17.438rem] max-[810px]:mt-[1rem]"
        >
          <Image
            className="h-[11.75rem] group-hover:scale-110 transition duration-300 ease-in-out"
            width={210}
            height={188}
            priority
            src={Img["official-artwork"].front_default}
            alt={`imagem de ${pokemon}`}
          />
        </div>
        <Infos
          height={dataPokemon.height}
          weight={dataPokemon.weight}
          abilities={dataPokemon.abilities}
          types={dataPokemon.types}
          description={descriptionPokemon.flavor_text_entries[1].flavor_text}
          moves={dataPokemon.moves}
          stats={dataPokemon.stats}
          id={dataPokemon.id}
        />
      </section>
    </>
  );
}
