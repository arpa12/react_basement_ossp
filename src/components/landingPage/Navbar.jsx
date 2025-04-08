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

const Navbar = () => {
    const [isEnglish, setIsEnglish] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toggleLanguage = () => setIsEnglish((prev) => !prev);

    const renderContactInfo = () => (
        <HStack spacing={4}>
            {CONTACT_INFO.map((info, index) => (
                <HStack key={index}>
                    <info.icon />
                    <Text fontWeight="bold" fontSize="sm">
                        {info.label}
                    </Text>
                </HStack>
            ))}
        </HStack>
    );

    const renderLanguageSwitcher = () => (
        <HStack spacing={4}>
            <Text fontWeight="bold" fontSize="sm">
                {isEnglish ? 'EN' : 'বাং'}
            </Text>
            <Switch colorScheme="teal" isChecked={isEnglish} onChange={toggleLanguage} />
            <HStack>
                <QuestionOutlineIcon />
                <Text fontWeight="bold" fontSize="sm">
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
                py={5}
                position="fixed"
                top={0}
                left={0}
                right={0}
                zIndex={10}
                width="100%"
                boxShadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto" maxW="1200px">
                    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {renderContactInfo()}
                    </HStack>

                    <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'lg' }} textAlign="center" flex={1}>
                        ওয়ান স্টপ সার্ভিস (ওএসএস)
                    </Text>

                    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {renderLanguageSwitcher()}
                    </HStack>
                </Flex>
            </Box>

            {/* Main Navbar - Fixed */}
            <Box
                bg="white"
                color="black"
                shadow="md"
                position="fixed"
                top="60px" // Adjust to make space for the Top Bar
                left={0}
                right={0}
                zIndex={9}
                width="100%"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto" maxW="1200px">
                    <HStack spacing={2}>
                        <RouterLink to="/">
                            <Image
                                boxSize="150px" // Increased image size
                                objectFit="contain"
                                src={require('../../assets/images/logo.png')}
                                alt="OSSP"
                                cursor="pointer"
                            />
                        </RouterLink>
                    </HStack>

                    <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
                        <Button
                            as={RouterLink}
                            to="/about"
                            colorScheme="blue"
                            variant="outline"
                            leftIcon={<InfoOutlineIcon />}
                        >
                            {isEnglish ? 'About OSSP' : 'ওএসএসপি সম্পর্কে'}
                        </Button>
                        <Button
                            as={RouterLink}
                            to="/why"
                            colorScheme="blue"
                            variant="outline"
                            leftIcon={<QuestionOutlineIcon />}
                        >
                            {isEnglish ? 'Why OSSP' : 'কেন ওএসএসপি'}
                        </Button>
                        <Button as={RouterLink} to="/login" colorScheme="blue" leftIcon={<LockIcon />}>
                            {isEnglish ? 'Login' : 'লগইন'}
                        </Button>
                        <Button as={RouterLink} to="/signup" colorScheme="blue" variant="outline">
                            {isEnglish ? 'Sign Up' : 'সাইন আপ'}
                        </Button>
                    </HStack>

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
                        <Image
                            boxSize="100px"
                            objectFit="contain"
                            src={require('../../assets/images/logo.png')}
                            alt="OSSP"
                        />

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

                        {/* Mobile Contact Info */}
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
