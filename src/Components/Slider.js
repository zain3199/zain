import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function App() {
  return (
    <>
    
      <Box align="center" >
        <Heading fontSize="6xl">Our Portfolio</Heading>
        <Text fontSize="xl" px="260px">With years of experience and in-depth industry knowledge, we are your go-to choice for the best digital solutions. Take a look at how we have helped several clients.</Text>
      </Box>
      <Swiper
      
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        style={{  height: "60%", paddingBottom:"60px",marginTop:"50px"  }}
      >
        <SwiperSlide className="slider" >
          <Box
            h="100%"
            w="100%"
            pos="absolute"
            
          >
            <Image src="dark.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px" _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Dairy Product App
            </Heading>
            <Button
              variant="outline"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
              fontWeight="normal"
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box h="100%" w="100%" pos="absolute">
            <Image src="car.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px"  _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Car Wash Service App
            </Heading>
            <Button
              variant="outline"
              fontWeight="normal"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
            
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box h="100%" w="100%" pos="absolute">
            <Image src="deli.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px"  _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Delivery App
            </Heading>
            <Button
              variant="outline"
              fontWeight="normal"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider" >
          <Box
            h="100%"
            w="100%"
            pos="absolute"
            
          >
            <Image src="dark.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px" _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Dairy Product App
            </Heading>
            <Button
              variant="outline"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
              fontWeight="normal"
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box h="100%" w="100%" pos="absolute">
            <Image src="car.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px"  _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Car Wash Service App
            </Heading>
            <Button
              variant="outline"
              fontWeight="normal"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
            
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box h="100%" w="100%" pos="absolute">
            <Image src="deli.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px"  _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Delivery App
            </Heading>
            <Button
              variant="outline"
              fontWeight="normal"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider" >
          <Box
            h="100%"
            w="100%"
            pos="absolute"
            
          >
            <Image src="dark.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px" _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Dairy Product App
            </Heading>
            <Button
              variant="outline"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
              fontWeight="normal"
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box h="100%" w="100%" pos="absolute">
            <Image src="car.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px"  _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Car Wash Service App
            </Heading>
            <Button
              variant="outline"
              fontWeight="normal"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
            
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box h="100%" w="100%" pos="absolute">
            <Image src="deli.jpg" borderRadius="5px" h="100%" w="100%" />
          </Box>
          <Box w="100%" h="100%" pos="relative" pt="270px" pl="20px"  _hover={{
              backgroundColor:"#39b54a",
              opacity:"0.7"
            }}>
            <Text textColor="white">Development</Text>

            <Heading textColor="white" fontSize="x-large" py="12px">
              Delivery App
            </Heading>
            <Button
              variant="outline"
              fontWeight="normal"
              _hover={{
                background: "green",
                transform: "translate(0px,-2px)",
                borderColor: "#4AC45B",
              }}
              textColor="white"
              transition="transform 0.3s ease-in-out"
            >
              CASE STUDY
            </Button>
          </Box>
        </SwiperSlide>
        
      </Swiper>
      
    </>
  );
}
