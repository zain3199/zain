import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton ,
  
  MenuItem,
  MenuList,
  Stack,
  Text,
  IconButton
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon , AddIcon,ExternalLinkIcon ,RepeatIcon,EditIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <>
    <Flex
    display={{sm:"none", md:"none" , lg:"block" , xl:"block"}}>
      <HStack justify="space-between" px="42" >
        <Image src="logo.png"  />

        <HStack spacing={{xl:"30", md:"5"}} fontSize="lg" >
          <Text
            color="white"
            _hover={{
              color: "#4AC45B",
            }}
          >
            Home
          </Text>
          <Text
            color="white"
            _hover={{
              color: "#4AC45B",
            }}
          >
            Services
          </Text>
          <Text
            color="white"
            _hover={{
              color: "#4AC45B",
            }}
          >
            About
          </Text>
          <Text
            color="white"
            _hover={{
              color: "#4AC45B",
            }}
          >
            Portfolio
          </Text>
          <Text
            color="white"
            _hover={{
              color: "#4AC45B",
            }}
          >
            Textimonial
          </Text>
          <Text
            color="white"
            _hover={{
              color: "#4AC45B",
            }}
          >
            Contacts
          </Text>

          <Button
            variant="outline"
            w="200px"
            h="50px"
            _hover={{
              background: "#4AC45B",
              transform: "translate(0px,-2px)",
              borderColor: "#4AC45B",
            }}
            textColor="white"
            transition="transform 0.3s ease-in-out"
          >
            FREE CONSULTATION
          </Button>
        </HStack>
      </HStack>
    </Flex>
    <Flex
    justify="space-between"
    width="100%"
    px="20px"
    align="center"
    display={{sm:"flex", md:"flex" , lg:"none",xl:"none"}}
    >
      <Image src="logo.png"  />
    <Menu>
    
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    color="red"
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
    </Flex>
    </>
  );
};

export default Navbar;
