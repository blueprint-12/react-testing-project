import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Spinner from "./components/Spinner";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 20,
    },
  },
});

//devtools 사용안할 시 false로 끄기

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense fallback={<Spinner />}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.Suspense>
);
