import { coresFortes } from "@/assets/colors";
import { AboutProps } from "./Infos";
import "animate.css";

export default function About({
  height,
  weight,
  abilities,
  types,
  description,
}: AboutProps) {
  const heigthTem = height.toString().split("");
  const weightTem = weight.toString().split("");

  return (
    <section className="flex flex-col gap-5 animate__animated animate__fadeIn max-[810px]:ml-[14px]">
      <div className="flex">
        <p className="font-semibold text-[#2E3057] text-sm mr-2">Types</p>
        <ul className="flex gap-1">
          {types.map((type) => (
            <li
              key={type.type.name}
              className="h-[22px] pl-2 pr-2 text-xs text-white font-semibold rounded-lg flex justify-center items-center capitalize"
              style={{
                backgroundColor: `${coresFortes[type.type.name]}`,
              }}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs text-[#2E3057] font-normal">{description}</p>
      </div>
      <section className="flex justify-evenly items-center h-[50px] w-[317px] bg-[#EBF3F5] shadow-md shadow-[rgba(0, 0, 0, 0.25)] rounded-[15px]">
        <div className="flex ">
          <p className="mr-[13px] font-semibold text-[#2E3057] text-sm">
            Heigth
          </p>
          {Number(height) < 10 && (
            <span className="font-semibold text-[#2E3057BF] text-sm">
              0.{height}m
            </span>
          )}
          {Number(height) > 10 && Number(height) < 100 && (
            <span className="font-semibold text-[#2E3057BF] text-sm">
              {heigthTem[0]}.{heigthTem[1]}m
            </span>
          )}
          {Number(height) > 100 && (
            <span className="font-semibold text-[#2E3057BF] text-sm">
              {heigthTem[0]}
              {heigthTem[1]}.{heigthTem[1]}m
            </span>
          )}
        </div>
        <div className="w-[1px] h-[34px] bg-[#2E305780]"></div>
        <div className="flex ">
          <p className="mr-[13px] font-semibold text-[#2E3057] text-sm">
            Weigth
          </p>
          {Number(weight) < 100 && (
            <span className="font-semibold text-[#2E3057BF] text-sm">
              {weightTem[0]}.{weightTem[1]}kg
            </span>
          )}
          {Number(weight) >= 100 && Number(weight) < 1000 && (
            <span className="font-semibold text-[#2E3057BF] text-sm">
              {weightTem[0]}
              {weightTem[1]}.{weightTem[2]}kg
            </span>
          )}
          {Number(weight) >= 1000 && (
            <span className="font-semibold text-[#2E3057BF] text-sm">
              {weightTem[0]}
              {weightTem[1]}
              {weightTem[2]}.{weightTem[3]}kg
            </span>
          )}
        </div>
      </section>
      <div className="flex">
        <p className="font-semibold text-[#2E3057] text-sm mr-2">Abilities :</p>
        <div className=" flex flex-col mt-[3px]">
          {abilities.map((ability, index) => (
            <span
              key={ability.ability.name}
              className="capitalize font-semibold text-[#2E3057BF] text-xs"
            >
              {ability.ability.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
