import React, { useState } from 'react';
import {
    Box,
    Grid,
    Text,
    Button,
    Input,
    FormControl,
    HStack,
    VStack,
    Divider,
    useBreakpointValue,
    Card,
    CardBody,
    CardFooter,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import {
    DownloadIcon,
    CheckIcon,
    PhoneIcon,
    EmailIcon,
    ExternalLinkIcon,
} from '@chakra-ui/icons';

const HelpPage = () => {
    const [email, setEmail] = useState('');
    const isMobile = useBreakpointValue({ base: true, md: false });

    const cardData = [
        {
            title: 'Home Support',
            description:
                'Available Sunday to Thursday, 9:00 AM - 5:00 PM. Closed on weekends and public holidays.',
            image: 'https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg',
            buttonText: 'More Info',
        },
        {
            title: 'OSS Help Desk',
            description: 'We’re here to answer your questions.',
            image: 'https://bidaquickserv.org/assets/images/need_help/oss_help_desk.png',
            buttonText: 'More Info',
        },
        {
            title: 'Call Center',
            description: 'Contact our call center for assistance.',
            image: 'https://bidaquickserv.org/assets/images/need_help/call.png',
            buttonText: 'More Info',
        },
        {
            title: 'Email Us',
            description: 'support@ba-systems.com',
            image: 'https://bidaquickserv.org/assets/images/need_help/email.png',
            buttonText: 'Download AppSupport',
            buttonIcon: <DownloadIcon />,
        },
        {
            title: 'AnyDesk Support',
            description: 'Show your issue to the help desk officer via AnyDesk.',
            image: 'https://bidaquickserv.org/assets/images/need_help/anydesk.png',
            buttonText: 'Download AnyDesk',
            link: 'https://download.anydesk.com/AnyDesk.exe',
        },
        {
            title: 'Complaints',
            description:
                'For support-related complaints, email semeen@ba-systems.com.',
            image: 'https://bidaquickserv.org/assets/images/need_help/complain.png',
            buttonText: 'More Info',
        },
    ];

    return (
        <Box px={{ base: 4, md: 8 }} mt="140px" bg="blue.50">
            <VStack spacing={8} align="stretch">
                {/* Title Section */}
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.600" mb={4} mt="30px">
                    Support Options
                </Text>

                {/* Support Options Cards */}
                <Grid
                    templateColumns={{
                        base: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }}
                    gap={6}
                    justifyItems="center"
                    px="20px"
                >
                    {cardData.map((card, index) => (
                        <Box key={index} width="100%" maxW="sm" minH="340px">
                            <Card
                                height="100%"
                                variant="elevated"
                                boxShadow="xl"
                                borderRadius="md"
                                p={4}
                                textAlign="center"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                            >
                                <CardBody>
                                    {card.image && (
                                        <Image src={card.image} alt={card.title} boxSize="100px" mb={4} mx="auto" />
                                    )}
                                    <Text fontWeight="bold" fontSize="lg">
                                        {card.title}
                                    </Text>
                                    <Text fontSize="sm" color="gray.600" mt={2}>
                                        {card.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    {card.link ? (
                                        <a href={card.link} rel="noopener noreferrer" style={{ width: '100%' }}>
                                            <Button
                                                colorScheme="teal"
                                                size="sm"
                                                width="100%"
                                                leftIcon={card.buttonIcon ?? undefined}
                                            >
                                                {card.buttonText}
                                            </Button>
                                        </a>
                                    ) : (
                                        <Button
                                            colorScheme="teal"
                                            size="sm"
                                            width="100%"
                                            leftIcon={card.buttonIcon ?? undefined}
                                        >
                                            {card.buttonText}
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </Box>
                    ))}
                </Grid>

                {/* Divider */}
                <Divider my={6} />

                {/* Resend Verification Link Section */}
                <Box mt="7px" mx="20px">
                    <Text fontSize="2xl" fontWeight="bold" color="gray.700" mb={2}>
                        Resend Verification Link
                    </Text>
                    <Text color="gray.600" mb={4}>
                        Enter your registered email to request a new verification link.
                    </Text>

                    <FormControl id="email" isRequired mb={4}>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            size="md"
                        />
                    </FormControl>

                    <HStack spacing={4} align="center">
                        <Box
                            border="1px solid"
                            borderColor="gray.300"
                            borderRadius="md"
                            px={4}
                            py={2}
                            display="flex"
                            alignItems="center"
                        >
                            <CheckIcon color="teal.500" mr={2} />
                            <Text fontSize="sm" color="gray.600">
                                I'm not a robot
                            </Text>
                        </Box>

                        <Button colorScheme="blue" size="md">
                            Submit
                        </Button>
                    </HStack>
                </Box>

                {/* FAQs Section */}
                <Box mt="7px" mx="20px">
                    <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
                        FAQs
                    </Text>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        {/* AccordionItem 1 */}
                        <AccordionItem
                            border="none"
                            borderRadius="md"
                            boxShadow="md"
                            bg="white"
                            mb={4}
                            transition="all 0.2s ease-in-out"
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                        >
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Why do I need to sign up to submit an application?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                The One Stop Service (OSS) system is a fully automated, paperless, and cashless
                                web-based application for investors. Watch our video tutorial:&nbsp;
                                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={{ color: 'blue' }}>
                                    YouTube Link
                                </a>
                            </AccordionPanel>
                        </AccordionItem>

                        {/* AccordionItem 2 */}
                        <AccordionItem
                            border="none"
                            borderRadius="md"
                            boxShadow="md"
                            bg="white"
                            mb={4}
                            transition="all 0.2s ease-in-out"
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                        >
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        How can I get updates on application status?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                After submitting an application, you can track its status via our platform.
                            </AccordionPanel>
                        </AccordionItem>

                        {/* AccordionItem 3 */}
                        <AccordionItem
                            border="none"
                            borderRadius="md"
                            boxShadow="md"
                            bg="white"
                            mb={4}
                            transition="all 0.2s ease-in-out"
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                        >
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Who do I contact for technical support?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text mb={2}>Contact Business Automation Ltd. for technical support:</Text>

                                <HStack align="start" spacing={3} mb={2}>
                                    <PhoneIcon mt={1} />
                                    <Text>Call center: <strong>+8809678771353</strong></Text>
                                </HStack>

                                <HStack align="start" spacing={3} mb={2}>
                                    <EmailIcon mt={1} />
                                    <Text>Email: <strong>support@batworld.com</strong></Text>
                                </HStack>

                                <HStack align="start" spacing={3}>
                                    <ExternalLinkIcon mt={1} />
                                    <Text>
                                        Online support portal:&nbsp;
                                        <a
                                            href="https://support.batworld.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ color: 'blue' }}
                                        >
                                            Visit Support Portal
                                        </a>
                                    </Text>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                {/* Contact Info */}
                <Box mt="7px" mx="20px" pb="30px">
                    <Text fontWeight="bold" fontSize="lg" mb={1}>Supervising Officer</Text>
                    <Text fontWeight="semibold" mb={1}>Jibon Krishna Saha Roy</Text>
                    <Text mb={1}>Director, One Stop Service (OSS)</Text>
                    <Text mb={1}>Phone: +880255007217 | Mobile: +8801846740822</Text>
                    <Text>Email: dir5.osss@bida.gov.bd</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default HelpPage;
