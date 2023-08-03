import React from "react";
import ReactDOM from "react-dom/client"; //importing the react modules first

import {
  ChakraProvider,
  ColorModeContext,
  ColorModeScript,
} from "@chakra-ui/react"; //then importing the 3rd party lib.s

import App from "./App"; //finally importing the comps and modules made locally
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {" "}
      {/* theme provided by chakra provider */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />{" "}
      {/* set the ColorModeScript to the configured color mode in the theme.ts file */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
