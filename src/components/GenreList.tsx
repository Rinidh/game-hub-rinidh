import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  // if (error) return null; //we may not need this code as the genres are statically loaded (in the useGenre), but you may keep it in case your mind changes
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={0}>
        Genres
      </Heading>
      <List /* this is a list in chakra */>
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            padding="10px" /* use ListItem from chakra with List of chakra */
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"43px"}
                borderRadius={8}
                objectFit={"cover"} //"contain" makes the whole img to appear in the 32px by 32px boxSize, "fill" makes the img to occupy all the space (even though cutting off the extremes) , "cover" makes the image filled in the container, but while preserving its ASPECT RATIO
              />
              <Button
                fontSize={20}
                variant={
                  "ghost"
                } /* adds style to the button, more: solid, link etc */
                onClick={() => onSelectGenre(genre)} //once clicked, the func set to onSelectGenre at the consumer of this comp will run ie in our case setSelectedGenre in App.tsx will run, with arg 'genre' from here
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "normal"
                }
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
