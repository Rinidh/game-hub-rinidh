import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"} //works just like the flex box and sends the color mode button to the extreme right
      padding={"10px"} //like the normal html padding
    >
      <Image
        src={logo}
        boxSize={
          "60px"
        } /* src="../assets/GameHub Resources/Logo/logo.webp" directly wont work */
      />
      <ColorModeSwitch />
      {/* use the Text comp of chakra with applied styles and more */}
    </HStack>
  );
};

export default NavBar;
