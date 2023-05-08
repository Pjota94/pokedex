import Image from "next/image";

const fetchDataId = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default async function Pokemon({
  params,
}: {
  params: { pokemon: string };
}) {
  const { pokemon } = params;

  const dataPokemon = await fetchDataId(pokemon);

  const Img = dataPokemon.sprites.other;

  return (
    <>
      <h1 className="text-center mt-4">{pokemon}</h1>
      <div className="flex justify-center mt-10">
        <Image
          width={150}
          height={150}
          src={Img["official-artwork"].front_default}
          alt={`imagem de ${pokemon}`}
        />
      </div>
    </>
  );
}
