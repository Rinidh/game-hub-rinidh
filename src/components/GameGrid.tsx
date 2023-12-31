import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);

  if (error) return <Text color="red">{error}</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //using 6 skeletons showed screen while loading
  //these numbers are simply going to be mapped to a GameCardSkeleton comp

  let cards;
  if (isLoading) {
    cards = skeletons.map((skeletonNumber) => (
      <GameCardContainer
        key={
          skeletonNumber
        } /*Using the numbers to transform them into and pass as skeletons here, no state hook needed for the skeletons arr*/
      >
        <GameCardSkeleton />
      </GameCardContainer>
    ));
  } else {
    cards = games.map((game) => (
      <GameCardContainer
        key={
          game.id
        } /* define the key prop whenever mapping sth as per react rules in the main comp rendered ie put the key prop in GameCardContainer, not GameCard  */
      >
        <GameCard game={game} />
      </GameCardContainer>
    ));
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} //passing an obj that determines how many columns on each screen size
      spacing={6} /* spacing of 10px */
      padding={"10px"}
    >
      {cards}
    </SimpleGrid>
  );
};

export default GameGrid;
