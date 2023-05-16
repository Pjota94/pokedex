import "animate.css";
import { Move } from "./Infos";

export default function Moves({ moves }: Move) {
  return (
    <section className="animate__animated animate__fadeIn">
      <ul className="grid grid-cols-3 overflow-y-auto h-[14.7rem] gap-2">
        {moves.map((move) => (
          <li
            className="text-[12px] font-semibold text-[#2E3057] h-[30px] pl-2 pr-2 bg-[#EBF3F5] shadow-md shadow-[rgba(0, 0, 0, 0.25)] rounded-lg flex justify-center items-center capitalize"
            key={move.move.name}
          >
            {move.move.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
