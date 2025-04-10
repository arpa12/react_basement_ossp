import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Text,
    VStack,
    Heading,
    useColorModeValue,
    Divider,
    Radio,
    RadioGroup,
    Checkbox,
    InputLeftAddon,
    FormHelperText,
    HStack,
    Link
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [gender, setGender] = useState('male'); // Tracks gender selection
    const [idType, setIdType] = useState('NID'); // Tracks identification type selection

    // Theme-based color styling
    const bgColor = useColorModeValue('gray.100', 'gray.800');
    const cardBg = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box bg={bgColor} minH="100vh" pt="150px" display="flex" justifyContent="center" alignItems="center">
            <Box
                bg={cardBg}
                borderRadius="lg"
                boxShadow="lg"
                width="full"
                maxW="lg" // Restoring original width
                px={{ base: 6, md: 10 }}
                py={{ base: 8, md: 12 }}
                mb="20px"
            >
                {/* Header */}
                <Heading as="h2" size="lg" textAlign="center" mb={6} fontWeight="semibold" color="teal.600">
                    Sign Up
                </Heading>

                <VStack spacing={5} align="stretch">
                    {/* Name */}
                    <FormControl id="name" isRequired>
                        <FormLabel fontWeight="medium">Name</FormLabel>
                        <Input type="text" placeholder="Enter your name" />
                    </FormControl>

                    {/* Email */}
                    <FormControl id="email" isRequired>
                        <FormLabel fontWeight="medium">Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" />
                    </FormControl>

                    {/* Phone Number */}
                    <FormControl id="phone" isRequired>
                        <FormLabel fontWeight="medium">Phone Number</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="+880" />
                            <Input type="tel" placeholder="Enter your phone number" />
                        </InputGroup>
                    </FormControl>

                    {/* Gender */}
                    <FormControl id="gender" isRequired>
                        <FormLabel fontWeight="medium">Gender</FormLabel>
                        <RadioGroup onChange={setGender} value={gender}>
                            <HStack spacing="24px">
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                                <Radio value="other">Other</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>

                    {/* Identification Type */}
                    <FormControl id="idType" isRequired>
                        <FormLabel fontWeight="medium">Identification Type</FormLabel>
                        <RadioGroup onChange={setIdType} value={idType}>
                            <HStack spacing="24px">
                                <Radio value="NID">NID</Radio>
                                <Radio value="TIN">TIN</Radio>
                                <Radio value="BRC">BRC</Radio>
                                <Radio value="Passport">Passport</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>

                    {/* Identification Number */}
                    <FormControl id="idNumber" isRequired>
                        <FormLabel fontWeight="medium">{idType} Number</FormLabel>
                        <Input type="text" placeholder={`Enter your ${idType} number`} />
                    </FormControl>

                    {/* Date of Birth (only for NID) */}
                    {idType === 'NID' && (
                        <FormControl id="dob" isRequired>
                            <FormLabel fontWeight="medium">Date of Birth</FormLabel>
                            <Input type="date" />
                        </FormControl>
                    )}

                    {/* Upload ID Copy */}
                    <FormControl id="idCopy" isRequired>
                        <FormLabel fontWeight="medium">Upload {idType} Copy</FormLabel>
                        <Input type="file" />
                        <FormHelperText fontSize="sm" color="gray.500">
                            [Format: JPG | Maximum 5MB]
                        </FormHelperText>
                    </FormControl>

                    {/* CAPTCHA */}
                    <FormControl id="captcha" isRequired>
                        <Checkbox defaultChecked>I&apos;m not a robot</Checkbox>
                    </FormControl>

                    {/* Sign Up Button */}
                    <Button
                        colorScheme="green"
                        size="md"
                        fontWeight="medium"
                        borderRadius="md"
                        width="full"
                        mt={4}
                    >
                        Sign Up
                    </Button>

                    <Divider mt={6} />

                    {/* Already have account */}
                    <Text fontSize="sm" textAlign="center" color="gray.500">
                        Already have an account?{' '}
                        <Link as={RouterLink} to="/login" color="teal.500">
                            Login
                        </Link>
                    </Text>
                    <Link as={RouterLink} to="/" color="teal.500" textAlign="center">
                        Back to Home
                    </Link>
                </VStack>
            </Box>
        </Box>
    );
};

export default SignUpPage;
