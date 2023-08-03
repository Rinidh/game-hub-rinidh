import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid //to create a grid similar to css grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile screens
        lg: `"nav nav" "aside main"`, //for lg (large) screens. Check more at chakra ui webpg eg md (medium), xl (extra large) etc
      }}
    >
      <GridItem area={"nav"} bg="">
        <NavBar />
      </GridItem>
      <Show
        above="lg" /*to show the "aside" area only on large screens and above. Also below="" */
      >
        <GridItem area={"aside"} bg="grey">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
