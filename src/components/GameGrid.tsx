import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6]; //using 6 skeletons showed screen while loading
  //these numbers are simply going to be mapped to a GameCardSkeleton comp

  return (
    <div>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} //passing an obj that determines how many columns on each screen size
        spacing={5} /* spacing of 10px */
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeletonNumber) => (
            <GameCardContainer
              key={
                skeletonNumber
              } /*Using the numbers to transform them into and pass as skeletons here, no state hook needed for the skeletons arr*/
            >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer
            key={
              game.id
            } /* define the key prop whenever mapping sth as per react rules in the main comp rendered ie put the key prop in GameCardContainer, not GameCard  */
          >
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
