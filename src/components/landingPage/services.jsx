// components/landingPage/services.jsx
import React from 'react';
import { Card, Box, Heading, Flex, Icon, Button, Text, VStack } from '@chakra-ui/react';
import { FaBuilding, FaFileAlt, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';
import bgImage from '../../assets/images/bg.jpg';
import { Link as RouterLink } from 'react-router-dom';

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
            p="30px"
            mt="20px"
        >
            <Heading textAlign="center" as='h2' size='xl' color="green.700">Services</Heading>
            <Flex justify="center" mt={50} px={4} wrap="wrap">
                <Flex
                    justify="center"
                    wrap="wrap"
                    gap={6}
                    maxWidth="100%"
                    width={{ base: "100%", md: "auto" }}
                >
                    {services.map(service => (
                        <Card
                            key={service.id}
                            width={{ base: "100%", sm: "45%", md: "22%" }}
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
                                <Icon as={service.icon} w={8} h={8} />
                                <Text fontSize="md" fontWeight="bold" textAlign="center">
                                    {service.title}
                                </Text>
                                <Button
                                    variant="link"
                                    _hover={{ color: 'green.700' }}
                                    boxShadow='md' p='3' rounded='md' bg='white'
                                    color={'green.700'}
                                    as={RouterLink}
                                    to={`/service/${service.id}`} // Link to dynamic service page
                                >
                                    Read More
                                </Button>
                            </VStack>
                        </Card>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}

export default Services;
