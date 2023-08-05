import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize={"14px"}
      paddingX={2} //means padding on left and right
      /* not hard coding the padding but assigning it indirectly to theme.space in chakra's implementation */
      borderRadius={"4px"}
      colorScheme={color} //colorScheme means setting the whole look including the background, borders, text etc to shades of that color
    >
      {score}
    </Badge>
  );
  {
    /* using the badge comp from chakra to display scores */
  }
};

export default CriticScore;
