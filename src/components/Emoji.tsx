import thumbsUp from "../assets/GameHub Resources/Emojis/thumbs-up.webp";
import bullsEye from "../assets/GameHub Resources/Emojis/bulls-eye.webp";
import meh from "../assets/GameHub Resources/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  //use of index signature below
  const emojiMap: { [key: number]: ImageProps } = {
    //the keys used in the obj are numbers, but ts doesn't look at them as so, it sees keys only. Therefore we tell ts compiler that there can any number (due to []) of keys in this obj, with values of type ImageProps (from chakra)
    3: { src: meh, alt: "meh (not that good)", boxSize: "40px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "40px" },
    5: { src: bullsEye, alt: "exceptionally excellent!", boxSize: "45px" },
  };

  return (
    <Image
      {...emojiMap[
        rating
      ]} /* instead of setting the src and alt atts, we can just pass them dynamically and spread them from the objs in emojiMap */
      marginTop={2}
    />
  );
};

export default Emoji;
