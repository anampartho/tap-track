// Taken from: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr
'use client';

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/*
        By default, React Query Devtools are only included in bundles when
        process.env.NODE_ENV === 'development', so we don't need to worry about
        excluding them during a production build.

        https://tanstack.com/query/latest/docs/framework/react/devtools
      */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
