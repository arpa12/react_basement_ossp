import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const AboutPage = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.800');

    return (
        <Box textAlign="center"  mt="200px" px="100px" py="20px">
                <Heading as="h1" size="xl" color="teal.600" >
                    About OSSP
                </Heading>
                <Text fontSize="lg" color="gray.700" mt="20px">
                    We are a dedicated team committed to providing the best service possible. Our mission is to enhance user experience and offer valuable insights.
                </Text>
        </Box>
    );
};

export default AboutPage;
