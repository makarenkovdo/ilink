import React from "react";
import ReactDOM from "react-dom";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { HomePage } from "../pages/home-page";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const client = new ApolloClient({
  uri: "https://academtest.ilink.dev/graphql",
  cache: new InMemoryCache(),
});

// TODO: (AM) определить, почему синтаксис react18 не сработал с beautiful-dnd ИЛИ временно перейти на react 17.0.2
// TODO: (AM) выделить слой провайдеров

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement,
);
