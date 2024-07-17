"use client";

import { queryClient } from "@/utils/config/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// const queryClient = new QueryClient();

export default function ContainerProvider({ children }: { readonly children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
