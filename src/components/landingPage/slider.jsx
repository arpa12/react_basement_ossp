import React from 'react';
import { Box, ChakraProvider, Button, Icon, Text, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

// Component Constants (Best Practice)
const SLIDES = [
  {
    id: 1,
    imageUrl: 'https://api-devreact.oss.net.bd/uploads/sliderImage/d95b9a6b-4c36-4a1e-ab97-c6986081fa3c.jpg',
    title: 'Welcome to OSSP',
    buttonText: 'View All Services',
    buttonLink: '/services'
  },
  {
    id: 2,
    imageUrl: 'https://api-devreact.oss.net.bd/uploads/sliderImage/8d7da292-a8dc-4405-a1c7-28984240684d.jpg',
    title: 'Explore Our Services',
    buttonText: 'Get Started',
    buttonLink: '/get-started'
  }
];

const CustomSlider = () => {
  return (
    <ChakraProvider>
      <Box w="100%" maxW="1400px" mx="auto" mt={10} position="relative" overflow="hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
        >
          {SLIDES.map(slide => (
            <SwiperSlide key={slide.id}>
              <Box
                bgImage={`url(${slide.imageUrl})`}
                bgSize="cover"
                bgPos="center"
                height={{ base: '300px', md: '500px', lg: '600px' }}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                position="relative"
                px={{ base: 6, md: 12, lg: 20 }}
                borderRadius="md"
                overflow="hidden"
              >
                {/* Text Section */}
                <Flex alignItems="center" zIndex={2}>
                  <Box w="6px" bg="yellow.400" mr={6} height="120px" />
                  <Box>
                    <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold" color="white" mb={4}>
                      {slide.title}
                    </Text>
                    <Button 
                      colorScheme="green" 
                      size="md"
                      onClick={() => window.location.href = slide.buttonLink}
                    >
                      {slide.buttonText}
                    </Button>
                  </Box>
                </Flex>
                
                {/* Overlay Effect */}
                <Box position="absolute" top="0" left="0" right="0" bottom="0" bgGradient="linear(to-r, blackAlpha.700, transparent)" />
              </Box>
            </SwiperSlide>
          ))}

          {/* Custom Left Arrow */}
          <Box
            className="custom-prev"
            position="absolute"
            top="50%"
            left="10px"
            transform="translateY(-50%)"
            zIndex={3}
            bg="white"
            p={2}
            borderRadius="full"
            boxShadow="md"
            cursor="pointer"
            _hover={{ bg: "green.500", color: "white" }}
          >
            <Icon as={FaChevronLeft} w={5} h={5} />
          </Box>

          {/* Custom Right Arrow */}
          <Box
            className="custom-next"
            position="absolute"
            top="50%"
            right="10px"
            transform="translateY(-50%)"
            zIndex={3}
            bg="white"
            p={2}
            borderRadius="full"
            boxShadow="md"
            cursor="pointer"
            _hover={{ bg: "green.500", color: "white" }}
          >
            <Icon as={FaChevronRight} w={5} h={5} />
          </Box>
        </Swiper>
      </Box>
    </ChakraProvider>
  );
};

export default CustomSlider;
