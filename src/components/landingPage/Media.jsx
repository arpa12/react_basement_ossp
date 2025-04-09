import React, { useRef, useState, useEffect } from "react";
import {
    Box,
    Flex,
    IconButton,
    Text,
    Image,
    Tag,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";

import leadershipImage from "../../assets/images/media_image_one.jpg";
import youthLeadershipImage from "../../assets/images/media_image_two.jpg";
import sdgWebinarImage from "../../assets/images/media_image_three.jpg";
import highLevelForumImage from "../../assets/images/media_image_four.jpg";

const MediaSection = () => {
    const scrollRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            title: "Youth Leadership Summit 2023",
            category: "Leadership",
            duration: "4 min 20 sec",
            image: youthLeadershipImage,
            videoUrl: "https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1",
        },
        {
            title: "Leadership Summit",
            category: "Leadership",
            duration: "4 min 20 sec",
            image: leadershipImage,
            videoUrl: "https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1",
        },
        {
            title: "Sustainable Development Goals Webinar",
            category: "Webinar",
            duration: "7 min 45 sec",
            image: sdgWebinarImage,
            videoUrl: "https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1",
        },
        {
            title: "High-level political forum 2020",
            category: "General",
            duration: "5 min 30 sec",
            image: highLevelForumImage,
            videoUrl: "https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1",
        },
    ];

    const repeatedVideos = [...videos, ...videos, ...videos]; // Duplicating to simulate infinite scroll

    const cardWidth = 300;

    const scrollSmoothly = (container, offset) => {
        if (!container) return;

        // Get current scroll position
        const currentScroll = container.scrollLeft;

        // Get max scroll position
        const maxScroll = cardWidth * videos.length * 2;

        // Scroll smoothly
        container.scrollBy({ left: offset, behavior: "smooth" });

        // Handle smooth looping
        setTimeout(() => {
            if (currentScroll >= maxScroll) {
                // We reached the end, reset scroll to the start (without jumping)
                container.scrollTo({ left: videos.length * cardWidth, behavior: "smooth" });
            }
        }, 1000);
    };

    useEffect(() => {
        const container = scrollRef.current;

        const autoplay = setInterval(() => {
            scrollSmoothly(container, cardWidth); // Auto scroll every 2 seconds
        }, 6000);

        return () => clearInterval(autoplay);
    }, []);

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedVideo(null);
    };

    const zoomInOut = keyframes`
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    `;

    return (
        <Box maxW="1300px" mx="auto" mt={10} px={4} position="relative">
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6} color="green.700">
                MEDIA
            </Text>

            <IconButton
                icon={<ArrowBackIcon />}
                aria-label="Scroll Left"
                onClick={() => scrollSmoothly(scrollRef.current, -cardWidth)} // On arrow click, scroll left
                position="absolute"
                top="50%"
                left="10px"
                transform="translateY(-50%)"
                zIndex="1"
                bg="white"
                boxShadow="md"
            />
            <IconButton
                icon={<ArrowForwardIcon />}
                aria-label="Scroll Right"
                onClick={() => scrollSmoothly(scrollRef.current, cardWidth)} // On arrow click, scroll right
                position="absolute"
                top="50%"
                right="10px"
                transform="translateY(-50%)"
                zIndex="1"
                bg="white"
                boxShadow="md"
            />

            <Box
                h="320px"
                overflowX="auto"
                ref={scrollRef}
                css={{
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollBehavior: "smooth", // Smooth scrolling enabled
                }}
            >
                <Flex w="max-content">
                    {repeatedVideos.map((video, index) => (
                        <Box
                            key={index}
                            flex="0 0 auto"
                            scrollSnapAlign="start"
                            w={{ base: "260px", md: `${cardWidth}px` }} // Responsive width
                            mx="2"
                            borderRadius="lg"
                            overflow="hidden"
                            bg="white"
                            boxShadow="md"
                            transition="transform 0.3s ease-in-out"
                            _hover={{
                                transform: "scale(1.05)",
                            }}
                            onClick={() => openModal(video)}
                        >
                            <Box position="relative" h="200px">
                                <Image
                                    src={video.image}
                                    alt={video.title}
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                />
                                <Box
                                    position="absolute"
                                    top="30%"
                                    left="40%"
                                    transform="translate(-50%, -50%)"
                                    bg="green.500"
                                    borderRadius="full"
                                    w="70px"
                                    h="70px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    opacity={0.9}
                                    css={{
                                        animation: `${zoomInOut} 1.5s infinite`,
                                    }}
                                >
                                    <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </Box>
                            </Box>
                            <Box p="4">
                                <Flex justify="space-between" mb="2">
                                    <Tag colorScheme="green" fontSize="sm">
                                        {video.category}
                                    </Tag>
                                    <Text fontSize="sm">{video.duration}</Text>
                                </Flex>
                                <Text fontWeight="bold">{video.title}</Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Box>

            {selectedVideo && (
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{selectedVideo.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <iframe
                                    width="100%"
                                    height="400px"
                                    src={selectedVideo.videoUrl}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="ghost" onClick={closeModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default MediaSection;
