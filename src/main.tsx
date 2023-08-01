import React from "react";
import ReactDOM from "react-dom/client"; //importing the react modules first

import { ChakraProvider } from "@chakra-ui/react"; //then importing the 3rd party lib.s

import App from "./App"; //finally the comps and modules made locally
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
