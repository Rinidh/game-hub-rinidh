import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

//importing the icons
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //instead of writing a bunch of if stmts, first assign each slug below to the corresponding icon as prop values to access later
  const iconMap: { [key: string]: IconType } = {
    //[key: string] is called the index signature, where you assign the keys of objs a type. Here, it means each key of the iconmap obj is a string holding values of type IconType from react-icons
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack
      marginY={
        3
      } /* also the vertcial margin here can be set to {"10px"} but it is better to set an integer, which will become a multiple of the theme.space value in chakra's implementation, which will maintain consistency  */
    >
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color={"gray.500"}
          key={platform.id} //coz each child must have a key prop for identification as per react
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
