import Image from "next/image";
import pokeball from "../assets/pokeball.png";

export default function LoadingEvolutions() {
  return (
    <div className="mt-[70px] flex  flex-col justify-center items-center">
      <Image
        className="animate-spin"
        src={pokeball}
        width={100}
        height={100}
        alt="pokeball"
        priority
      />
      <p className="font-semibold text-lg">Loading...</p>
    </div>
  );
}
