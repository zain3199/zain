import {
  Box,
  Button,
  Center,
  Code,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Cards from "../Components/Cards";
import Countup from "../Components/Countup";
import Navbar from "../Components/Navbar"
import Slider from "../Components/Slider";

const Home = () => {
  const ref = useRef(null);

  const scroll = (e) => {
    if (window.scrollY >= 3100) {
    }
    // console.log(ref.current.clientHeight );
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, [scroll]);

  return (
    <>
      <Box bgImage="bgimg.jpg" >
        <Navbar />

        <VStack align={{md:"center", xl:"center"}} justify={{xl:"center" , md:"center"}}  py={{xl:"120px" ,md:"70px"}} >
          <Heading fontSize={{xl:"6xl" ,lg:"6xl", md:"2xl"}} color="#4AC45B">
            YOUR DIGITAL EXPERIENCES
          </Heading>
          <Heading fontSize={{xl:"6xl" ,lg:"6xl", md:"2xl"}} color="#4AC45B">
            — PERSONIFIED!
          </Heading>
          <Text align="center" fontSize={{xl:"2xl",lg:"2xl", md:"lg"}} py="30px" color="white" px="35px">
            Embrace Digital Transformation with Axis Coding Solutions. We
            Provide Digital Solutions By Integrating State-Of-The-Art
            Technologies and Ensure Seamless User-Experience.
          </Text>
          <Button
           
            variant="outline"
            w={{xl:"200px", lg:"200px"}}
            h="60px"
            _hover={{
              background: "#4AC45B",
              transform: "translate(0px,-2px)",
              borderColor: "#4AC45B",
            }}
            transition="transform 0.3s ease-in-out"
            textColor="white"
          >
            CONTACT US
          </Button>
        </VStack>
      </Box>
      <Stack spacing="5px" py="80px" px="120px" bgColor="white" >
        <Heading fontSize="6xl">WHAT WE DO</Heading>
        <Text fontSize="lg">
          Axis Coding Solutions provides a whole range of digital solutions
          under one roof.
        </Text>
      
      </Stack>
      

      <HStack py="90px" spacing="9" px="30px" backgroundColor="#F8F9FC" display={{md:"block" ,xl:"flex"}}>
        <Image src="pic.jpg" borderRadius="6px" />
        <VStack align="flex-start">
          <Heading fontSize="7xl">About Us</Heading>
          <Text fontWeight="bold" fontSize="xl">
            Embrace Digital Transformation
          </Text>
          <Text fontSize="xl">
            At Axis Coding Solutions, we love to deliver digital solutions for
            refining your web technologies, developing great relationships along
            the way. We take pride in building strong capabilities for designing
            and engineering web software, mobile apps, and robust web solutions
            for your business. Other than designing innovative web solutions,
            Axis Coding Solutions also offers state-of-the-art marketing and
            promotion for your websites, facilitating your access to the global
            audience
          </Text>
        </VStack>
      </HStack>
      <Box w="100%" h={1000} py={42}>
        <Slider />
      </Box>

      {/* counter section */}
      <Box align="center" bgColor="#F8F9FC" py="120px" ref={ref} px="180px" >
        <Box fontSize="4xl" fontWeight="bold">
          FIGURES WE HAVE ON BOARD
        </Box>

        <HStack spacing={{xl:"36", md:"none"}} align="center" px={{xl:"20px",md:"none"}} py="20px" display={{md:"block" ,lg:"flex"}}>
          <Box>
            <Text fontSize="6xl" fontWeight="bold" color="#39B54A">
              {<Countup start={0} end={15} />}+
            </Text>
            <Text fontSize="2xl" color="#AEAEA8">
              Years Of Experience
            </Text>
          </Box>
          <Box>
            <Text fontSize="6xl" fontWeight="bold" color="#39B54A">
              {<Countup start={0} end={10} />}+
            </Text>
            <Text fontSize="2xl" color="#AEAEA8">
              Professionals In Our Team
            </Text>
          </Box>
          <Box>
            <Text fontSize="6xl" fontWeight="bold" color="#39B54A">
              {<Countup start={0} end={20} />}+
            </Text>
            <Text fontSize="2xl" color="#AEAEA8">
              Successfully Developed Projects
            </Text>
          </Box>
        </HStack>
      </Box>

      <Box>
        <Flex w="100%" pos="absolute" my="100px">
          <Box w="50%" pl="310px">
            <Image src="im1.png" />
          </Box>
          <Box w="50%" pl="100px" pt="100px">
            <Image src="im2.png" />
          </Box>
        </Flex>

        <VStack pos="relative">
          <Text
            align="center"
            px="150px"
            pt="140px"
            fontSize="2xl"
            fontWeight="medium"
          >
            We are very happy with the software that Axis Coding Solutions has
            created for us. They perfectly meets our requirements and helps us
            to deal with the problems we face. The Axis Coding Solutions team
            supports the software promptly and precisely to our demand. I am
            sure that our collaboration will stay like this.
          </Text>
          <Text align="center" pt="70px" fontSize="xl">
            ALEX
          </Text>
          <HStack align="center " spacing="6" pt="60px">
            <Image src="av.jpg" borderRadius="5px" />
            <Image src="av.jpg" borderRadius="5px" />
            <Image src="av.jpg" borderRadius="5px" />
            <Image src="av.jpg" borderRadius="5px" />
            <Image src="av.jpg" borderRadius="5px" />
          </HStack>
        </VStack>
      </Box>
      <HStack mt="150px" bgColor="#F5F5F5" py={{xl:"100px",md:"20px"}} px={{md:"15px"}} w="100%">
        <Box w="50%" fontSize={{xl:"xl" , md:"lg"}} px="25px">
          <Heading fontSize={{xl:"6xl" , md:"3xl"}}>Let's Get Connect!</Heading>
          <Text>
            Have any questions? Fill out the form and hit the submit button, we
            will get back to you shortly!
          </Text>
          <Text>For urgent queries, you can connect with us via phone:</Text>{" "}
          <Text
            bg="transparent"
            fontSize="lg"
            _hover={{ textColor: "green.500" }}
          >
            +923334140241
          </Text>
          or email:
          <Code
            _hover={{
              color: "green",
            }}
            bg="transparent"
            mb="40px"
            fontSize="lg"
            fontWeight="600"
          >
            contact@axiscodingsolutions.com
          </Code>
          <Stack spacing="5">
            <Input placeholder="Name" h="50px" />
            <Input placeholder="Email" h="50px" />
            <Input placeholder="Phone Number" h="50px" />
            <Textarea placeholder="Message" h="150px" />
            <Button
              _hover={{
                background: "white",
                textColor: "green",
                border: "1px solid green",
              }}
              bgColor="#39b54a"
              textColor="white"
              h="55px"
              w="160px"
              fontSize="lg"
            >
              SUBMIT
            </Button>
          </Stack>
        </Box>
        <Box w="50%"  >
          <Image src="girl.jpg" borderRadius="15px" px="10px" />
        </Box>
      </HStack>
      <Flex w="100%">
        <Box bgImg="pt.png" w="50%" h="500px" px={{xl:"90px",md:"45px"}} py={{xl:"90px",md:"30px"}}>
          <Text fontSize="2xl" textColor="white" py={{xl:"30px",md:"15px"}}>
            Digital Transformation is made easy with the Axis Coding Solutions.
            We aspire to provide you with a hassle-free experience and offer a
            one-stop solution to all your digital design and development needs!
          </Text>
          <Button
            py="30px"
            variant="outline"
            w="280px"
            _hover={{
              background: "white",
              transform: "translate(0px,-2px)",
              borderColor: "white",
              textColor: "green",
            }}
            transition="transform 0.3s ease-in-out"
            textColor="white"
          >
            WANT TO KNOW MORE?
          </Button>
        </Box>
        <HStack w="50%" bgImg="bg.jpg" textColor="#9B9EAB" fontSize="sm">
          <VStack align="flex-start" px={{lg:"30px",md:"15px"}}>
            <Heading fontSize="xl" py="30px">
              Quick Link
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="medium"
              _hover={{ textColor: "#4AC45B" }}
            >
              Work
            </Text>
            <Text
              fontSize="lg"
              fontWeight="medium"
              _hover={{ textColor: "#4AC45B" }}
            >
              Hire Dedicated Developers
            </Text>
            <Text
              fontSize="lg"
              fontWeight="medium"
              _hover={{ textColor: "#4AC45B" }}
            >
              Let's Talk
            </Text>
          </VStack>
          <VStack align="flex-start" px="60px" pb="38px">
            <Heading fontSize="xl" pb="25px">
              Say Hello
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="medium"
              _hover={{ textColor: "#4AC45B" }}
            >
              contact@axiscodingsolutions.com
            </Text>
            <Text
              fontSize="lg"
              fontWeight="medium"
              _hover={{ textColor: "#4AC45B" }}
            >
              career@axiscodingsolutions.com
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default Home;
