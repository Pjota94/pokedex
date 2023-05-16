import { cores } from "@/assets/colors";
import Image from "next/image";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

const fetchDataId = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default (async function CardPokemon({ name, url }: Pokemon) {
  const dataPokemon = await fetchDataId(url);
  const Img = dataPokemon.sprites.other;

  return (
    <Link
      href={`${name}`}
      className={`cursor-pointer flex justify-center flex-col items-center w-[110px] h-[146px] rounded-[8px] group overflow-hidden `}
      style={{ backgroundColor: `${cores[dataPokemon.types[0].type.name]}` }}
    >
      <Image
        className="group-hover:scale-110 transition duration-300 ease-in-out"
        priority
        width={77}
        height={68}
        src={Img["official-artwork"].front_default}
        alt={name}
      />
      <h1 className="capitalize text-[12px] font-semibold mb-[4px]">{name}</h1>
      {dataPokemon.id < 10 && (
        <p className="font-light text-[11px]">00{dataPokemon.id}</p>
      )}
      {dataPokemon.id > 10 && dataPokemon.id < 100 && (
        <p className="font-light text-[11px]">0{dataPokemon.id}</p>
      )}
      {dataPokemon.id > 10 && dataPokemon.id > 100 && (
        <p className="font-light text-[11px]">{dataPokemon.id}</p>
      )}
    </Link>
  );
} as unknown as (props: any) => JSX.Element);
