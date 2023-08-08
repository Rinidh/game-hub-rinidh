import {
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  //this one obj holds all the vars (as props) for the state of the App eg the selectedGenre, selectedPlatform etc
  genre: Genre | null; //or selectedGenre, any name you like
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); //initailizing "as gameQuery" coz we can't initialize the state var of type gameQuery obj with an empty obj as per ts compiler

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
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform} //to notify the PlatformSelector (sending data in) to change the name on screen from "Platforms" to the name of the selectedPlatform
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
