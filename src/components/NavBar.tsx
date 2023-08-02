import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize={
          "60px"
        } /* src="../assets/GameHub Resources/Logo/logo.webp" directly wont work */
      />
      <Text>Nav bar</Text>
      {/* use the Text comp of chakra with applied styles and more */}
    </HStack>
  );
};

export default NavBar;
