import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
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
            <Text fontSize={20}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
