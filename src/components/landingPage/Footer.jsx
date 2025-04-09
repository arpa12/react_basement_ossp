import React from 'react';
import { Box, Container, Grid, GridItem, Stack, Text, Image, Link, Heading } from '@chakra-ui/react';
import projectLogo from '../../assets/images/logo_bgRemove.png';
import companyLogo from '../../assets/images/company.png';

const Footer = () => {
    return (
        <Box
            bg="green.700"
            color="white"
            py={8}
            width="100%"
            position="relative"
            mt="50px"
            boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)"
            transform="scale(1)"
            transition="all 0.3s ease-in-out"
        >
            <Container maxW="container.xl" position="relative">
                <Grid
                    templateColumns={{
                        base: "1fr", // 1 column for small screens
                        md: "1fr 1fr", // 2 columns for medium screens
                        lg: "1fr 1fr 1fr 1fr", // 4 columns for large screens
                    }}
                    gap={8}
                    alignItems="flex-start"
                >
                    {/* First Column - Technical Support */}
                    <GridItem ml={{ base: "0", md: "20px" }}>
                        <Stack spacing={4}>
                            <Text fontWeight="bold" fontSize="lg" mb={2}>সার্ভিক তত্ত্বাবধানে</Text>
                            <Box mb={4}>
                                <Image
                                    src= {projectLogo}
                                    alt="OSS Platform"
                                    maxW="150px"
                                    mt="-60px"
                                    ml="-10px"

                                />
                            </Box>
                            <Text fontWeight="bold" fontSize="lg" mt="-50px">কারিগরি সহযোগিতায়</Text>
                            <Box>
                                <Image
                                    src= {companyLogo}
                                    alt="Business Automation"
                                    maxW="150px"
                                />
                            </Box>
                        </Stack>
                    </GridItem>

                    {/* Second Column - Services */}
                    <GridItem ml={{ base: "0", md: "20px" }}>
                        <Heading as="h3" size="md" mb={4}>সেবা</Heading>
                        <Stack spacing={2}>
                            <Link href="#">প্রাক-নিবন্ধন</Link>
                            <Link href="#">নিবন্ধন</Link>
                            <Link href="#">প্রাক-নিবন্ধন বিষয়ক</Link>
                            <Link href="#">অভিযোগ</Link>
                        </Stack>
                    </GridItem>

                    {/* Third Column - Others */}
                    <GridItem ml={{ base: "0", md: "20px" }}>
                        <Heading as="h3" size="md" mb={4}>অন্যান্য</Heading>
                        <Stack spacing={2}>
                            <Link href="#">শর্তাবলী</Link>
                            <Link href="#">জিজ্ঞাসা</Link>
                        </Stack>
                    </GridItem>

                    {/* Fourth Column - Important Links */}
                    <GridItem mr={{ base: "0", lg: "20px" }}>
                        <Heading as="h3" size="md" mb={4}>গুরুত্বপূর্ণ লিংকসমূহ</Heading>
                        <Stack spacing={2}>
                            <Link href="#">ধর্ম বিষয়ক মন্ত্রণালয়</Link>
                            <Link href="#">বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়</Link>
                            <Link href="#">বিমান বাংলাদেশ এয়ারলাইন্স</Link>
                            <Link href="#">বাংলাদেশ হোমিওপ্যাথি</Link>
                            <Link href="#">ইসলামিক ফাউন্ডেশন</Link>
                        </Stack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
