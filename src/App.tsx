import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import "./App.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  //this one obj holds all the vars (as props) for the state of the App eg the selectedGenre, selectedPlatform etc
  genre: Genre | null; //or selectedGenre, any name you like
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
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
        <Box
          paddingLeft={
            2
          } /* this Box mainly to keep the Flex (with PlatformSelector and SortSelector) and the GameHeading comps vertically aligned. If we put a new comp in this Box, it is then easy to keep stuff aligned */
        >
          <Flex
            marginBottom={
              5
            } /* wrapped using Flex instaed of HStack (used before) to prevent the error Mr Mosh was getting (about no margins allowed btn a popper and its ref elements) */
          >
            <Box
              marginRight={
                5
              } /* another important flexbox type wrap elem is Box... find more at chakra webpg */
            >
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform} //to notify the PlatformSelector (sending data in) to change the name on screen from "Platforms" to the name of the selectedPlatform
              />
            </Box>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </Flex>
          <GameHeading gameQuery={gameQuery} />
        </Box>
        <GameGrid
          gameQuery={
            gameQuery
          } /* this is where our selected genres, platforms, sortorders are sent to be accessed in the useData hook to fetch data acc.ly */
        />
      </GridItem>
    </Grid>
  );
};

export default App;
