import {  Title } from "@mantine/core";
import { GeneralNiveles } from "../components/pages/GeneralNiveles";

import { ButtonsData } from "../components/pages/ButtonsData";



export default function NamePage() {
  const datos = {
    title: "Primaria",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias doloribus impedit.",
  };
  return (
    <div >
      <div className="text-center">
      <Title order={1} c={"orange"}>{datos.title}</Title>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />

      <ButtonsData />    
      <GeneralNiveles />
    </div>
  );
}