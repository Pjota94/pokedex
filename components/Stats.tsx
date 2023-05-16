import "animate.css";
import { Stat } from "./Infos";

export default function Stats({ stats }: Stat) {
  return (
    <section className="animate__animated animate__fadeIn">
      <ul className="flex flex-col gap-1 max-[810px]:ml-[14px]">
        {stats.map((stat) => (
          <div key={Math.random()} className="flex items-center">
            <li className="capitalize flex">
              <p className="text-[#2E30577D] w-[133px] mr-[36px] max-[810px]:mr-[15px]">
                {stat.stat.name}
              </p>
              <span className="text-[#2E3057] font-semibold w-8">
                {stat.base_stat}
              </span>
              <div className="flex items-center">
                <div className="rounded flex items-center bg-[#2E30577D] w-[160px] h-[0.25rem]">
                  <div
                    className="rounded  transition duration-300 ease-in-out"
                    style={{
                      width: `${Number(stat.base_stat)}px`,
                      height: "0.188rem",
                      background: "#2E3057",
                    }}
                  ></div>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
}
