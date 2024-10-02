"use client";
import React from "react";
import { isValidElement } from "react";
import { useAppSelector } from "@/store";
import { Button, Title } from "@mantine/core";


interface Props {
  param: string;
}

const iconStyle: React.CSSProperties = {
    width: 80,
    height: 60,
}

export const ButtonsData = ({ param }: Props) => {
  const niveles = useAppSelector((state) => state.AppState.niveles);
  const data = niveles.find(
    (nivel) => nivel.title.toLowerCase() === param.toLowerCase()
  );
  if (!data) return null;
  return (
    <>
      <div className="text-center ">
        <Title order={1} fw={800} td="underline" c={data?.color}>
          {param.toUpperCase()}
        </Title>
      </div>

      <section className=" py-6 ">
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-wrap -mx-4">
            {data.documents?.map((document) => (
              <div key={document.nombre} className="w-full md:w-1/3 px-4 mb-8">
                <div className=" p-8 shadow-md rounded-md  ">
                  <div className="flex justify-center items-center mb-4">
                    {isValidElement(document.icon) ? (
                      React.cloneElement(document.icon as React.ReactElement, {
                        style: iconStyle,
                        color: document.color || "red",
                      })
                    ) : (
                      <span>No Icon</span> // Maneja el caso en el que el icono no está definido
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {document.nombre}
                  </h3>
               
                  <Button
                    variant="outline"
                    onClick={() => window.open("/mi-documento.pdf")}
                  
                    radius="lg"
                    size="xs" 
                  >
                    Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
