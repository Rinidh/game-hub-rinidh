import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); // a built in hook in chakra that enables us manage the color mode

  return (
    <HStack /* use the hsatck whenever you wanna put sth in horizontal layout eg the switch and its label in this case */
    >
      <Switch
        colorScheme="green" //means the switch will turn green when on
        isChecked={colorMode === "dark"}
        /* means the button will show active/green when the colorMode is dark */
        onChange={
          toggleColorMode
        } /* defines what to do when the switch is changed / on or off */
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
