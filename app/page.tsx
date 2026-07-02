import { Hero } from "@/components/hero/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Pratos } from "@/components/sections/Pratos";
import { Drinks } from "@/components/sections/Drinks";
import { Ambiente } from "@/components/sections/Ambiente";
import { AvaliacoesGoogle } from "@/components/sections/AvaliacoesGoogle";
import { Cardapio } from "@/components/sections/Cardapio";
import { Reserva } from "@/components/sections/Reserva";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Pratos />
      <Drinks />
      <Ambiente />
      <AvaliacoesGoogle />
      <Cardapio />
      <Reserva />
    </>
  );
}
