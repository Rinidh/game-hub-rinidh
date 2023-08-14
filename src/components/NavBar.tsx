import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
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
      <SearchInput />
      <ColorModeSwitch />
      {/* use the Text comp of chakra with applied styles and more */}
    </HStack>
  );
};

export default NavBar;
