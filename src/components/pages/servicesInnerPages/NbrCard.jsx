import React from 'react';
import { Box, Heading, Text, Button, Divider } from '@chakra-ui/react';

const BidaCard = () => {
    return (
        <Box
            maxW="800px"
            mx="auto"
            mt="200px"
        >
            <Heading as="h1" size="xl"  color="teal.600" mb={5}>
                National Board of Revenue (NBR)
            </Heading>
            <Text fontSize="lg" color="gray.600">
                The One Stop Service Platform (OSSP) is a government initiative designed to streamline services for investors, businesses, and citizens. It offers a single digital platform for various government services that were once scattered across multiple agencies. To begin using OSSP, simply create an account on the platform, fill in the necessary details, and start submitting your applications for various services. The user-friendly interface will guide you through the entire process.
            </Text>

            <Divider my={6} />

            <Heading as="h1" size="xl"  color="teal.600" mb={5}>
                Documents
            </Heading>
            <Button colorScheme="teal" width="80px" variant="outline">
                Doc 1
            </Button>

        </Box>
    );
};

export default BidaCard;
