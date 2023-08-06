import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; //means the child is going to be another jsx comp, or a boolean (which is ignored), a null or undefined (which is also ignored), a string, number or array of these
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={
        "300px" //this width is applied to the base Box comp hence to the GameCard and GameCard skeelton or any other comp rendered as a child to GameCardContainer
      }
      borderRadius={10}
      overflow={"hidden"} //a css prop that prevents the contents of the card div from overflowing through the div boundaries eg the a bigger image will not have rounded corners even though you set the borderRadius prop here
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
