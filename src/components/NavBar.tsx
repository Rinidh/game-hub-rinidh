import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  //this interface is defined in SearchInput and also here such that we can access the onSeach from the
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      padding={"10px"} //like the normal html padding
    >
      <Image
        src={logo}
        boxSize={
          "60px"
        } /* src="../assets/GameHub Resources/Logo/logo.webp" directly wont work */
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
      {/* use the Text comp of chakra with applied styles and more */}
    </HStack>
  );
};

export default NavBar;
