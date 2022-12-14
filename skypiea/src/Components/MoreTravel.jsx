import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBagShopping,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
} from "@chakra-ui/react";

export default function MoreTravel() {
  return (
    <>
      <Menu isLazy>
        <MenuButton bg={"none"} border={"none"} color={"white"}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p>More Travel</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </MenuButton>
        {/* MENU LIST */}
        <MenuList width={"300px"}>
          {/*  */}
          <MenuItem
            minH="48px"
            border={"none"}
            pl={"20px"}
            borderTopRadius={"10px"}
            bg={"white"}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Fluffybuns the Destroyer</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
          <MenuItem minH="40px" bg={"white"} color={"navy"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Simon the pensive</span>
          </MenuItem>
          {/*  */}
        </MenuList>
      </Menu>
    </>
  );
}
