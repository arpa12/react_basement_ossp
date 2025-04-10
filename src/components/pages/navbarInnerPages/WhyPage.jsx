import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    List,
    ListItem,
    ListIcon,
    Link,
    useColorModeValue,
    Container,
    Flex,
} from '@chakra-ui/react';
import { CheckCircleIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Whypage = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.700'); // page background
    const cardBg = useColorModeValue('white', 'gray.800');     // content card
    const textColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <Box bg={bgColor} minH="100vh" pt="140px" pb={16}>
            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                <Flex justify="center">
                    <Box
                        bg={cardBg}
                        boxShadow="xl"
                        borderRadius="lg"
                        p={{ base: 6, md: 10 }}
                        width="100%"
                    >
                        <VStack spacing={10} align="stretch">
                            <Heading
                                as="h1"
                                size="xl"
                                textAlign="center"
                                color="teal.600"
                            >
                                Why Use One Stop Service Platform (OSSP)?
                            </Heading>

                            {/* About Section */}
                            <Box>
                                <Heading as="h2" size="lg" mb={2} color="teal.500">
                                    About OSSP
                                </Heading>
                                <Text fontSize="md" color={textColor}>
                                    The One Stop Service Platform (OSSP) is a government initiative designed to streamline services
                                    for investors, businesses, and citizens. It offers a single digital platform for various government
                                    services that were once scattered across multiple agencies.
                                </Text>
                            </Box>

                            {/* Key Benefits */}
                            <Box>
                                <Heading as="h2" size="lg" mb={2} color="teal.500">
                                    Key Benefits of OSSP
                                </Heading>
                                <List spacing={3} color={textColor}>
                                    {[
                                        ['Streamlined Process', 'Access multiple services from one platform, reducing paperwork and visit frequency.'],
                                        ['Transparency', 'Track the status of your applications or requests at any time.'],
                                        ['24/7 Access', 'The platform is accessible online at all hours, making it convenient for users.'],
                                        ['Security', 'OSSP ensures your personal and business information is secure.'],
                                        ['Automation', 'Processes are automated to reduce delays, ensuring faster responses.'],
                                    ].map(([title, desc], idx) => (
                                        <ListItem key={idx}>
                                            <ListIcon as={CheckCircleIcon} color="green.500" />
                                            <strong>{title}:</strong> {desc}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* Getting Started */}
                            <Box>
                                <Heading as="h2" size="lg" mb={2} color="teal.500">
                                    How to Get Started with OSSP
                                </Heading>
                                <Text fontSize="md" color={textColor}>
                                    To begin using OSSP, simply create an account on the platform, fill in the necessary details,
                                    and start submitting your applications for various services. The user-friendly interface will guide you
                                    through the entire process.
                                </Text>
                            </Box>

                            {/* Who Can Benefit */}
                            <Box>
                                <Heading as="h2" size="lg" mb={2} color="teal.500">
                                    Who Can Benefit from OSSP?
                                </Heading>
                                <List spacing={3} color={textColor}>
                                    {[
                                        ['Investors', 'Access investment-related services and approvals.'],
                                        ['Business Owners', 'Submit business-related documents and applications.'],
                                        ['Citizens', 'Apply for permits, licenses, and other government services.'],
                                        ['Government Agencies', 'Use the platform to manage and process requests.'],
                                    ].map(([group, desc], idx) => (
                                        <ListItem key={idx}>
                                            <ListIcon as={ArrowForwardIcon} color="blue.500" />
                                            <strong>{group}:</strong> {desc}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* Learn More */}
                            <Box>
                                <Heading as="h2" size="lg" mb={2} color="teal.500">
                                    Learn More
                                </Heading>
                                <Text fontSize="md" color={textColor}>
                                    For more information on how OSSP can benefit you,&nbsp;
                                    <Link
                                        as={RouterLink}
                                        to="/help"
                                        color="blue.500"
                                        fontWeight="bold"
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        visit our Contact Us page
                                    </Link>{' '}
                                    for further inquiries.
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Whypage;
