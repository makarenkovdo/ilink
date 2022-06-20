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

// root.render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <HomePage isDragging text="some" />
//     </ApolloProvider>
//   </React.StrictMode>,
// );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
