import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms(); //data here is of type Platform[] ie Platforms array

  // if (error) return null; //no platforms are seen on dropdown if an error occurs

  return (
    <Menu /* you can always check the chakra website for more info  */>
      <MenuButton
        as={Button} /* Button from chakra */
        rightIcon={<BsChevronDown />} /* BsChevronDown from react-icons */
      >
        Platforms
      </MenuButton>

      <MenuList>
        {
          error && (
            <MenuItem color={"red"}>{error}</MenuItem>
          ) /* or you may prefer just to show nothing */
        }
        {data &&
          data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
