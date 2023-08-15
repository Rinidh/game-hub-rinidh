import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { //the config var is of type ThemeConfig to access the initialColoMode prop below
  initialColorMode: "dark" //or light or system
}

const theme = extendTheme({
  config,
  colors: {
    gray: { //to modify the color shades of gray eg the gray200, gray600 etc
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111"
    }
  }
}); //pass the config made thru this func to generate a usable theme

export default theme;
