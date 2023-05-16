import Image from "next/image";
import pokeball from "../../assets/pokeball.png";

export default function Loading() {
  return (
    <div className="w-full flex  flex-col justify-center items-center">
      <Image
        className="animate-spin"
        src={pokeball}
        width={150}
        height={150}
        alt="pokeball"
        priority
      />
      <p className="font-semibold text-lg">Loading...</p>
    </div>
  );
}
