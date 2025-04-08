import React from 'react';
import { Card, Box, Heading, Flex, Wrap, WrapItem, Icon, Button, Text, VStack } from '@chakra-ui/react';
import { FaBuilding, FaFileAlt, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';
import bgImage from '../../assets/images/bg.jpg';

const Services = () => {
    const services = [
        { id: 1, icon: FaBuilding, title: "Registrar of Joint Stock Companies and Firms (RJSC)" },
        { id: 2, icon: FaFileAlt, title: "DSCC, DNCC, CCC" },
        { id: 3, icon: FaMoneyBillWave, title: "National Board of Revenue (NBR)" },
        { id: 4, icon: FaUniversity, title: "Bida Listed Bank" }
    ];

    return (
        <Box
            backgroundImage={`url(${bgImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
        >

            <Heading textAlign="center" mt="70px" as='h2' size='2xl' color="green.700">Services</Heading>
            <Flex justify="center" mt={10} px={4}>
                <Wrap spacing="30px" justify="center">
                    {services.map(service => (
                        <WrapItem key={service.id}>
                            <Card
                                width={{ base: "300px", md: "320px", lg: "350px" }}
                                height={{ base: "220px", md: "220px", lg: "220px" }}
                                borderRadius="lg"
                                overflow="hidden"
                                boxShadow="lg"
                                bg="white"
                                color={'green.700'}
                                transition="0.3s"
                                position="relative"
                                _hover={{ bg: 'green.700', color: 'white', transition: '0.3s' }}
                            >
                                <VStack height="100%" justifyContent="space-between" p={5}>
                                    <Icon as={service.icon} w={12} h={12} />

                                    <Text fontSize="md" fontWeight="bold" textAlign="center">
                                        {service.title}
                                    </Text>

                                    <Button
                                        variant="link"
                                        _hover={{ color: 'green.700' }}
                                        boxShadow='md' p='3' rounded='md' bg='white'
                                        color={'green.700'}
                                    >
                                        Read More
                                    </Button>
                                </VStack>
                            </Card>
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>
        </Box>
    );
}

export default Services;
