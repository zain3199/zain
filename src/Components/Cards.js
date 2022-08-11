import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";


const Cards = (props) => {
  return (
    <VStack
      align="flex-start"
      boxShadow="sm"
      spacing={6}
      px="35px"
      backgroundColor="blackAlpha.100"
      _hover={{ shadow: "2xl", transform:  "translate(0px,-5px)", bgGradient: 'linear(to-r, #39b54a, #75ea85)', color: "white" }}
      py="30px"
      h="360px"
      w="352px"
      borderRadius="10px"
      color="black"
      transition="transform 0.3s ease-in-out"
    >
      <Icon
        as={FaMobileAlt}
        w={16}
        h={16}
         textColor="green.400"
       
      />

      <Heading fontSize="2xl">{props.h}</Heading>
      <Text>{props.t}</Text>
    </VStack>
  );
};

export default Cards;
