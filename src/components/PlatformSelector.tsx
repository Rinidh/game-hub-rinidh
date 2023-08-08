import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms(); //data here is of type Platform[] ie Platforms array

  //if (error) return null; //no platforms are seen on dropdown if an error occurs

  return (
    <Menu /* you can always check the chakra website for more info  */>
      <MenuButton
        as={Button} /* Button from chakra */
        rightIcon={<BsChevronDown />} /* BsChevronDown from react-icons */
      >
        {
          selectedPlatform?.name ||
            "Platforms" /* is any platform is selected ie if selectedPlatform has a name prop, then show it, or else if selectedPlatform is null, show "Platforms" */
        }
      </MenuButton>

      <MenuList>
        {
          error && (
            <MenuItem color={"red"}>{error}</MenuItem>
          ) /* or you may prefer just to show nothing as on line 8 */
        }
        {data &&
          data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)} //on clicking a certain Menu item, the platform will be passed as an arg to the outside where the consumer is using the arg eg the App comp is setting the selectedPlatform state var
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
