"use client";
import React from "react";
import ContainerProvider from "../Provider";

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <ContainerProvider>
      <section className="bg-blue-950">
        <div className="p-4 flex-1 w-full mx-auto">{children}</div>
      </section>
    </ContainerProvider>
  );
}
