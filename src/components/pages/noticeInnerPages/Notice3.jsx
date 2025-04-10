import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Notice1 = () => {
    return (
        <Container maxW="800px" mt="200px">
            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
                <Heading as="h2" size="xl" color="green.700" mb={4}>
                    Notice 3 Details
                </Heading>
                <Text fontSize="lg" color="gray.600">
                    This is the detailed content for Notice 3. You can add more information about this particular notice, such as the reason for the notice, any actions required, and other important details.
                </Text>
            </Box>
        </Container>
    );
}

export default Notice1;
