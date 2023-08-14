import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(
          game.background_image
        )} /* using the service to get a cropped image url to get a cropped image direclty from the api as it is possible to get a cropped img by passing the dimensions in the url for rawg api */
      />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          /* also from chakra-ui */
          fontSize={"3xl"}
        >
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
//instead of (platform)=>{<Text>{platform.platform.name}</Text>}, we just destructure the platform obj to get the platform prop

export default GameCard;
