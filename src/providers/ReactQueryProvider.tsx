"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                retry: 3,
                staleTime: 5 * 60 * 1000,
                refetchOnWindowFocus: false,
                refetchOnReconnect: true,
            },
        },
    }));

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
