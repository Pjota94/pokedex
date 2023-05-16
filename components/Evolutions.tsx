"use client";

import "animate.css";
import { AboutProps } from "./Infos";
import { api } from "@/services/api";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import LoadingEvolutions from "./LoadingEvolutions";
import Image from "next/image";
import { ArrowBigRight, ChevronsRight } from "lucide-react";

export default function Evolutions({ id }: AboutProps) {
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [fetching, setFetching] = useState(true);

  let poke: any = {
    evolutionChain: [
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
    ],
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const InfoEvolutions = async (id: string) => {
    await api
      .get(`pokemon/${id}`)
      .then(async (res) => {
        await axios.get(`${res.data.species.url}`).then(async (res) => {
          await axios
            .get(`${res.data.evolution_chain.url}`)
            .then(async (res) => {
              poke.evolutionChain[0].name =
                res.data.chain.species.name[0].toUpperCase() +
                res.data.chain.species.name.slice(1);
              await axios
                .get(`${res.data.chain.species.url}`)
                .then(async (res) => {
                  await axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${res.data.id}`)
                    .then((res) => {
                      poke.evolutionChain[0].image =
                        res.data.sprites.other[
                          "official-artwork"
                        ].front_default;
                    });
                });

              if (res.data.chain.evolves_to[0]?.species.name != null) {
                poke.evolutionChain[1].name =
                  res.data.chain.evolves_to[0].species.name[0].toUpperCase() +
                  res.data.chain.evolves_to[0].species.name.slice(1);
                await axios
                  .get(`${res.data.chain.evolves_to[0].species.url}`)
                  .then(async (res) => {
                    await axios
                      .get(`https://pokeapi.co/api/v2/pokemon/${res.data.id}`)
                      .then((res) => {
                        poke.evolutionChain[1].image =
                          res.data.sprites.other[
                            "official-artwork"
                          ].front_default;
                      });
                  });
              }
              if (
                res.data.chain.evolves_to[0]?.evolves_to[0]?.species.name !=
                null
              ) {
                poke.evolutionChain[2].name =
                  res.data.chain.evolves_to[0].evolves_to[0].species.name[0].toUpperCase() +
                  res.data.chain.evolves_to[0].evolves_to[0].species.name.slice(
                    1
                  );
                await axios
                  .get(
                    `${res.data.chain.evolves_to[0].evolves_to[0].species.url}`
                  )
                  .then(async (res) => {
                    await axios
                      .get(`https://pokeapi.co/api/v2/pokemon/${res.data.id}`)
                      .then((res) => {
                        poke.evolutionChain[2].image =
                          res.data.sprites.other[
                            "official-artwork"
                          ].front_default;
                      });
                  });
              }
            });
        });
      })
      .then((res) => {
        setPokemon(poke);
        setFetching(false);
        return res;
      });
  };
  const pokemonEvolution = useCallback(async () => {
    await InfoEvolutions(id);
  }, [InfoEvolutions, id]);

  useEffect(() => {
    pokemonEvolution();
  }, [pokemonEvolution]);

  return (
    <section className="animate__animated animate__fadeIn">
      {!fetching ? (
        <>
          {pokemon.evolutionChain[1].name === "" ? (
            <p>Não tem evolução</p>
          ) : (
            <>
              <div className="flex justify-center gap-9 items-center mt-2">
                <div>
                  <Image
                    width={75}
                    height={75}
                    priority
                    src={pokemon.evolutionChain[0].image}
                    alt={pokemon.evolutionChain[0].name}
                  />
                  <p className="font-semibold text-[#2E3057] text-sm text-center">
                    {pokemon.evolutionChain[0].name}{" "}
                  </p>
                </div>
                <ArrowBigRight color={"#2E3057"} />
                <div>
                  <Image
                    width={75}
                    height={75}
                    priority
                    src={pokemon.evolutionChain[1].image}
                    alt={pokemon.evolutionChain[1].name}
                  />
                  <p className="font-semibold text-[#2E3057] text-sm text-center">
                    {pokemon.evolutionChain[1].name}{" "}
                  </p>
                </div>
              </div>{" "}
              {pokemon.evolutionChain[2].name ? (
                <>
                  <div className="flex justify-center gap-9 items-center mt-5">
                    <div>
                      <Image
                        width={75}
                        height={75}
                        priority
                        src={pokemon.evolutionChain[1].image}
                        alt={pokemon.evolutionChain[1].name}
                      />
                      <p className="font-semibold text-[#2E3057] text-sm text-center">
                        {pokemon.evolutionChain[1].name}{" "}
                      </p>
                    </div>
                    <ArrowBigRight color={"#2E3057"} />
                    <div>
                      <Image
                        width={75}
                        height={75}
                        priority
                        src={pokemon.evolutionChain[2].image}
                        alt={pokemon.evolutionChain[2].name}
                      />
                      <p className="font-semibold text-[#2E3057] text-sm text-center">
                        {pokemon.evolutionChain[2].name}{" "}
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          )}
        </>
      ) : (
        <LoadingEvolutions />
      )}
    </section>
  );
}
