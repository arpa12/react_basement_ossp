import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Switch,
    HStack,
    VStack,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { PhoneIcon, EmailIcon, InfoOutlineIcon, QuestionOutlineIcon, LockIcon } from '@chakra-ui/icons';

// Constants for easy modification and reuse
const CONTACT_INFO = [
    { icon: PhoneIcon, label: '09639655565' },
    { icon: EmailIcon, label: 'support@ba-systems.com' },
];

const LANGUAGE_OPTIONS = {
    en: 'EN',
    bn: 'বাং',
};

const Navbar = () => {
    const [isEnglish, setIsEnglish] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Toggle language between English and Bengali
    const toggleLanguage = () => setIsEnglish((prev) => !prev);

    // Render the contact info section in the top bar
    const renderContactInfo = () => (
        <HStack spacing={4}>
            {CONTACT_INFO.map((info, index) => (
                <HStack key={index} spacing={2}>
                    <info.icon />
                    <Text fontWeight="bold" fontSize="sm">
                        {info.label}
                    </Text>
                </HStack>
            ))}
        </HStack>
    );

    // Render the language switcher with help text
    const renderLanguageSwitcher = () => (
        <HStack spacing={4}>
            <Text fontWeight="bold" fontSize="sm">
                {isEnglish ? LANGUAGE_OPTIONS.en : LANGUAGE_OPTIONS.bn}
            </Text>
            <Switch colorScheme="teal" isChecked={isEnglish} onChange={toggleLanguage} />
            <HStack mr="30px">
                <QuestionOutlineIcon />
                <Text
                    as={RouterLink}
                    to="/help" // Route to Help page when clicked
                    fontWeight="bold"
                    fontSize="sm"
                    color="white"
                    _hover={{ textDecoration: 'underline' }} // Adds hover effect
                >
                    {isEnglish ? 'Need Help?' : 'সহায়তা লাগবে?'}
                </Text>
            </HStack>
        </HStack>
    );

    return (
        <>
            {/* Top Bar */}
            <Box
                bg="green.700"
                color="white"
                px={{ base: 4, md: 8 }}
                py={3}
                position="fixed"
                top={0}
                left={0}
                right={0}
                zIndex={10}
                width="100%"
                boxShadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto" maxW="1200px" px={{ base: 4, md: 8 }}>
                    {/* Contact Info */}
                    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {renderContactInfo()}
                    </HStack>

                    {/* Navbar Title */}
                    <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'lg' }} textAlign="center" flex={1}>
                        ওয়ান স্টপ সার্ভিস (ওএসএস)
                    </Text>

                    {/* Language and Help Section */}
                    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {renderLanguageSwitcher()}
                    </HStack>
                </Flex>
            </Box>

            {/* Main Navbar */}
            <Box
                bg="white"
                color="black"
                shadow="md"
                position="fixed"
                top="40px"
                left={0}
                right={0}
                zIndex={9}
                width="100%"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto" maxW="1200px" py={0} px={{ base: 4, md: 8 }}>
                    {/* Logo */}
                    <HStack spacing={2}>
                        <RouterLink to="/">
                            <Image
                                boxSize="100px"
                                objectFit="cover"
                                src={require('../../assets/images/logo.png')}
                                alt="OSSP"
                                cursor="pointer"
                            />
                        </RouterLink>
                    </HStack>

                    {/* Nav Buttons */}
                    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <Button
                            as={RouterLink}
                            to="/about" // About page link
                            colorScheme="blue"
                            variant="outline"
                            leftIcon={<InfoOutlineIcon />}
                        >
                            {isEnglish ? 'About OSSP' : 'ওএসএসপি সম্পর্কে'}
                        </Button>
                        <Button
                            as={RouterLink}
                            to="/why" // Why page link
                            colorScheme="blue"
                            variant="outline"
                            leftIcon={<QuestionOutlineIcon />}
                        >
                            {isEnglish ? 'Why OSSP' : 'কেন ওএসএসপি'}
                        </Button>
                        <Button
                            as={RouterLink}
                            to="/login" // Login page link
                            colorScheme="blue"
                            leftIcon={<LockIcon />}
                        >
                            {isEnglish ? 'Login' : 'লগইন'}
                        </Button>
                        <Button
                            as={RouterLink}
                            to="/signup" // Sign Up page link
                            colorScheme="blue"
                            variant="outline"
                        >
                            {isEnglish ? 'Sign Up' : 'সাইন আপ'}
                        </Button>
                    </HStack>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        icon={<HamburgerIcon />}
                        size="lg"
                        variant="outline"
                        aria-label="Open Menu"
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onOpen}
                    />
                </Flex>
            </Box>

            {/* Mobile Drawer Menu */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <VStack align="center" spacing={4} mt={10} px={4}>
                        {/* Mobile Logo */}
                        <Image
                            boxSize="100px"
                            objectFit="contain"
                            src={require('../../assets/images/logo.png')}
                            alt="OSSP"
                        />

                        {/* Mobile Nav Buttons */}
                        <Button as={RouterLink} to="/about" colorScheme="blue" variant="outline" w="full" onClick={onClose}>
                            {isEnglish ? 'About OSSP' : 'ওএসএসপি সম্পর্কে'}
                        </Button>
                        <Button as={RouterLink} to="/why" colorScheme="blue" variant="outline" w="full" onClick={onClose}>
                            {isEnglish ? 'Why OSSP' : 'কেন ওএসএসপি'}
                        </Button>

                        <HStack spacing={4} w="full" justifyContent="center">
                            <Button as={RouterLink} to="/login" colorScheme="blue" w="40%" onClick={onClose}>
                                {isEnglish ? 'Login' : 'লগইন'}
                            </Button>
                            <Button as={RouterLink} to="/signup" colorScheme="blue" variant="outline" w="40%" onClick={onClose}>
                                {isEnglish ? 'Sign Up' : 'সাইন আপ'}
                            </Button>
                        </HStack>

                        {/* Mobile Contact Info and Language Switcher */}
                        <VStack align="start" p={4} bg="green.700" color="white" rounded="md" w="full">
                            {renderContactInfo()}
                            {renderLanguageSwitcher()}
                        </VStack>
                    </VStack>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
