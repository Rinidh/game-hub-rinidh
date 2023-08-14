import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Prop {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Prop) => {
  const sortOrders = [
    //because the rawg api doesn't return these values, we create them in an array and use this array to render a list of sortOrders (by mapping each to ListItem)
    { key: "", value: "Relevance (From API)" },
    { key: "name", value: "Name" },
    { key: "-released", value: "Date Released" }, //the key can also be "released" (without - before). Putting a dash makes the rawg api to return data in reverse chronological order ie the latest first
    { key: "-added", value: "Date Added" },
    { key: "-metacritic", value: "Popularity" },
    { key: "-rating", value: "Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.key === selectedSortOrder
  );

  return (
    <Menu /* you can always check the chakra website for more info  */>
      <MenuButton
        as={Button} /* Button from chakra */
        rightIcon={<BsChevronDown />} /* BsChevronDown from react-icons */
      >
        Order by: {currentSortOrder?.value || "Relevance (From API)"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.key}
            value={sortOrder.value}
            onClick={() => onSelectSortOrder(sortOrder.key)}
          >
            {sortOrder.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
