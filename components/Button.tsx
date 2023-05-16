import Link from "next/link";

export default function Button() {
  return (
    <>
      <Link
        href={"/listPokemons"}
        className="flex justify-center items-center h-12 w-56 bg-[#2E3057] text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-[#2E3057E0]"
      >
        More Pokémons
      </Link>
    </>
  );
}
