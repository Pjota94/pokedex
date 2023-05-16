"use client";
import { useState } from "react";
import About from "./About";
import Stats from "./Stats";
import Evolutions from "./Evolutions";
import Moves from "./Moves";

export type AboutProps = {
  height: string;
  weight: string;
  abilities: AbilitiesProps[];
  types: TypesProps[];
  description: string;
  moves: MovesProps[];
  stats: StatsProps[];
  id: string;
};

export type StatsProps = {
  base_stat: string;
  stat: { name: string };
};

export type Move = {
  moves: MovesProps[];
};

export type Stat = {
  stats: StatsProps[];
};

type AbilitiesProps = {
  ability: { name: string };
};

type TypesProps = {
  type: { name: string };
};

export type MovesProps = {
  move: { name: string };
};

export default function Infos({
  height,
  weight,
  abilities,
  types,
  description,
  moves,
  stats,
  id,
}: AboutProps) {
  const [type, setType] = useState("About");

  return (
    <div className="w-[370px] mt-10 max-[810px]:mb-5 max-[810px]:mt-[1rem]">
      <ul className="flex justify-between text-[18px] font-semibold mb-[31px] max-[810px]:justify-around">
        {type === "About" ? (
          <li
            onClick={() => setType("About")}
            className="cursor-pointer text-[#2E3057] border-solid border-b-2 border-[#2E3057] transition duration-300 ease-in-out "
          >
            About
          </li>
        ) : (
          <li
            onClick={() => setType("About")}
            className="cursor-pointer text-[#2E30577D]"
          >
            About
          </li>
        )}
        {type === "Stats" ? (
          <li
            onClick={() => setType("Stats")}
            className="cursor-pointer text-[#2E3057] border-solid border-b-2 border-[#2E3057] transition duration-300 ease-in-out"
          >
            Stats
          </li>
        ) : (
          <li
            onClick={() => setType("Stats")}
            className="cursor-pointer text-[#2E30577D]"
          >
            Stats
          </li>
        )}
        {type === "Evolutions" ? (
          <li
            onClick={() => setType("Evolutions")}
            className="cursor-pointer text-[#2E3057] border-solid border-b-2 border-[#2E3057] transition duration-300 ease-in-out"
          >
            Evolutions
          </li>
        ) : (
          <li
            onClick={() => setType("Evolutions")}
            className="cursor-pointer text-[#2E30577D]"
          >
            Evolutions
          </li>
        )}
        {type === "Moves" ? (
          <li
            onClick={() => setType("Moves")}
            className="cursor-pointer text-[#2E3057] border-solid border-b-2 border-[#2E3057] transition duration-300 ease-in-out"
          >
            Moves
          </li>
        ) : (
          <li
            onClick={() => setType("Moves")}
            className="cursor-pointer text-[#2E30577D]"
          >
            Moves
          </li>
        )}
      </ul>
      {type === "About" ? (
        <About
          height={height}
          weight={weight}
          abilities={abilities}
          types={types}
          description={description}
          moves={[]}
          stats={[]}
          id={""}
        />
      ) : (
        <></>
      )}

      {type === "Stats" ? <Stats stats={stats} /> : <></>}
      {type === "Evolutions" ? (
        <Evolutions
          id={id}
          height={""}
          weight={""}
          abilities={[]}
          types={[]}
          description={""}
          moves={[]}
          stats={[]}
        />
      ) : (
        <></>
      )}
      {type === "Moves" ? <Moves moves={moves} /> : <></>}
    </div>
  );
}
