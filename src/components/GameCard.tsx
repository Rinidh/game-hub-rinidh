import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card /* Card from chakra-ui to make a card */
      borderRadius={10}
      overflow={"hidden"} //a css prop that prevents the contents of the card div from overflowing through the div boundaries eg the a bigger image will not have rounded corners even though you set the borderRadius prop here
    >
      <Image
        src={getCroppedImageUrl(
          game.background_image
        )} /* using the service to get a cropped image url to get a cropped image direclty from the api as it is possible to get a cropped img by passing the dimensions in the url for rawg api */
      />
      <CardBody>
        <Heading
          /* also from chakra-ui */
          fontSize={"3xl"}
        >
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
//instead of (platform)=>{<Text>{platform.platform.name}</Text>}, we just destructure the platform obj to get the platform prop

export default GameCard;
