import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { //the config var is of type ThemeConfig to access the initialColoMode prop below
  initialColorMode: "dark" //or light or system
}

const theme = extendTheme({config}); //pass the config made thru this func to generate a usable theme

export default theme;
