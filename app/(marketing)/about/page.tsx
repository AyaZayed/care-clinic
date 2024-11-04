import React from "react";
import { name } from "@/utils/constants";

export default function AboutPage() {
  return (
    <section className="p-16 flex justify-center items-center flex-col">
      <h1 className="text-7xl mb-10 text-myTurqoise-700">About {name}</h1>
      <p className="text-xl text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iure
        doloremque dolor incidunt cupiditate eos mollitia possimus. Autem itaque
        voluptates non excepturi totam quod quas quae culpa. Mollitia, eius
        iste?
      </p>
    </section>
  );
}
