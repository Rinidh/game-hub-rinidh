import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); // a built in hook in chakra that enables us manage the color mode

  return (
    <HStack /* use the hsatck whenever you wanna put sth in horizontal layout eg the switch and its label in this case */
    /* width={ //rather set the Text comp below to nowrap
        "160px"
      } */
    >
      <Switch
        colorScheme="green" //means the switch will turn green when on
        isChecked={colorMode === "dark"}
        /* means the button will show active/green when the colorMode is dark */
        onChange={
          toggleColorMode
        } /* defines what to do when the switch is changed / on or off */
      />
      <Text
        whiteSpace={
          "nowrap"
        } /* to prevent the wrapping caused by the SearchInput comp */
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
