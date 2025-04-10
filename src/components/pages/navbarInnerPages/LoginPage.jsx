import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
    Link,
    Heading,
    Divider,
    useColorModeValue,
    Flex,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isOtpLogin, setIsOtpLogin] = useState(false); // Track OTP login form visibility
    const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

    // Theme-based color styling
    const bgColor = useColorModeValue('gray.100', 'gray.800');
    const cardBg = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    // Dynamic size adjustment based on the screen width
    const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });
    const formSpacing = useBreakpointValue({ base: 4, md: 5 });

    return (
        <Box bg={bgColor} minH="100vh" pt={{ base: '100px', md: '150px' }} display="flex" justifyContent="center" alignItems="center">
            <Box
                bg={cardBg}
                borderRadius="lg"
                boxShadow="lg"
                width="full"
                maxW={{ base: 'sm', md: 'lg' }}
                px={{ base: 6, md: 10 }}
                py={{ base: 8, md: 12 }}
                mb="20px"
            >
                {/* Header */}
                <Heading
                    as="h2"
                    size={headingSize}
                    textAlign="center"
                    mb={6}
                    fontWeight="semibold"
                    color="teal.600"
                >
                    Login
                </Heading>

                <VStack spacing={formSpacing} align="stretch">
                    {/* OTP Login Form - Show only if OTP Login is enabled */}
                    {isOtpLogin ? (
                        <Box>
                            {/* Mobile Number Form */}
                            {!otpSent ? (
                                <>
                                    <FormControl id="mobile" isRequired>
                                        <FormLabel fontWeight="medium">Mobile Number</FormLabel>
                                        <Input type="tel" placeholder="Enter your mobile number" />
                                    </FormControl>

                                    <Button
                                        colorScheme="green"
                                        size="md"
                                        fontWeight="medium"
                                        borderRadius="md"
                                        mt={4}
                                        onClick={() => setOtpSent(true)} // Simulate OTP sent
                                        width="full"
                                    >
                                        Send OTP
                                    </Button>
                                </>
                            ) : (
                                <>
                                    {/* OTP Form */}
                                    <FormControl id="otp" isRequired>
                                        <FormLabel fontWeight="medium">Enter OTP</FormLabel>
                                        <Input type="text" placeholder="Enter the OTP sent to your mobile" />
                                    </FormControl>

                                    <Button
                                        colorScheme="green"
                                        size="md"
                                        fontWeight="medium"
                                        borderRadius="md"
                                        mt={4}
                                        width="full"
                                    >
                                        Submit OTP
                                    </Button>
                                </>
                            )}
                        </Box>
                    ) : (
                        <Box>
                            {/* Email and Password Form */}
                            <FormControl id="email" isRequired>
                                <FormLabel fontWeight="medium">Email</FormLabel>
                                <Input type="email" placeholder="Enter your email" />
                            </FormControl>

                            <FormControl id="password" pt="20px" isRequired>
                                <Flex justify="space-between" align="center" mb={1}>
                                    <FormLabel fontWeight="medium" m={0}>
                                        Password
                                    </FormLabel>
                                    <Link as={RouterLink} to="/forgot-password" fontSize="sm" color="teal.500">
                                        Forgot Password?
                                    </Link>
                                </Flex>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                    />
                                    <InputRightElement>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <Box
                                border="1px solid"
                                borderColor={borderColor}
                                borderRadius="md"
                                p={4}
                                textAlign="left"
                                mt="20px"
                            >
                                <Text fontSize="sm" color="gray.600">
                                    <input type="checkbox" style={{ marginRight: '8px' }} />
                                    I'm not a robot
                                </Text>
                            </Box>

                            <Button
                                colorScheme="green"
                                size="md"
                                fontWeight="medium"
                                borderRadius="md"
                                width="full"
                                mt="20px"
                            >
                                Login
                            </Button>
                        </Box>
                    )}

                    {/* Divider */}
                    <Flex align="center" justify="center">
                        <Divider borderColor="gray.300" />
                        <Text px={2} fontSize="sm" color="gray.500">
                            Or
                        </Text>
                        <Divider borderColor="gray.300" />
                    </Flex>

                    {/* OTP Login Button */}
                    {!isOtpLogin && (
                        <Button
                            colorScheme="green"
                            variant="solid"
                            size="md"
                            fontWeight="medium"
                            borderRadius="md"
                            onClick={() => setIsOtpLogin(true)} // Set to OTP login view
                            width="full"
                        >
                            Login with OTP
                        </Button>
                    )}

                    <Text fontSize="sm" textAlign="center" color="gray.500">
                        Don't have an account?{' '}
                        <Link as={RouterLink} to="/signup" color="teal.500">
                            Sign Up
                        </Link>
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
};

export default LoginPage;
