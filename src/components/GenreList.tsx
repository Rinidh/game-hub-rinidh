import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null; //no genres are seen if an error occurs

  if (isLoading) return <Spinner />;

  return (
    <List /* this is a list in chakra */>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          padding="10px" /* use ListItem from chakra with List of chakra */
        >
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              fontSize={20}
              variant={
                "ghost"
              } /* adds style to the button, more: solid, link etc */
              onClick={() => onSelectGenre(genre)} //once clicked, the func set to onSelectGenre at the consumer of this comp will run ie in our case setSelectedGenre in App.tsx will run, with arg 'genre' from here
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
