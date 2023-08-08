import { Grid, GridItem, Show, useStatStyles } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); //initailizing the state hook var with a null, so need to specify null (by | null) as it is not assignable to type Genre

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile screens
        lg: `"nav nav" "aside main"`, //for lg (large) screens. Check more at chakra ui webpg eg md (medium), xl (extra large) etc
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr", //note the way these values are entered, sometimes we use backticks `` as above, and spaces to separate the widths of each column etc
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show
        above="lg" /*to show the "aside" area only on large screens and above. Also below="" */
      >
        <GridItem area={"aside"} paddingX={3}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
