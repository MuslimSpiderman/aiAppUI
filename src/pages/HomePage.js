import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Image,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box bg="white" color="black" pt="5rem" overflow="hidden" fontFamily="'Poppins', sans-serif">
      {/* Hero Section */}
      <MotionBox
        bgGradient="linear(to-r, #008080, #ff7f50)"
        height={{ base: "60vh", md: "70vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        px={{ base: "1rem", md: "2rem" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "4xl" }}
          color="white"
          mb="1.5rem"
          letterSpacing="wider"
        >
          Welcome to Your AI Companion
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} color="white" mb="2.5rem" maxW="800px">
          Transforming mental health support with state-of-the-art AI technology.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          bg="#008080"
          _hover={{ bg: '#006666' }}
          boxShadow="lg"
        >
          Get Started
        </Button>
      </MotionBox>

      {/* Features Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        px={{ base: "1rem", md: "3rem" }}
        py="3rem"
        maxW="1200px"
        mx="auto"
      >
        <MotionBox
          display="flex"
          flexDirection="column"
          justifyContent="center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Heading as="h2" size="xl" mb="1rem" color="#008080">
            AI-Driven Solutions
          </Heading>
          <Text fontSize="lg" color="gray.700" mb="1.5rem">
            Our chatbot leverages AI to provide personalized support, helping
            you navigate mental health challenges with empathy and precision.
          </Text>
          <Button
            colorScheme="teal"
            size="md"
            bg="#008080"
            _hover={{ bg: '#006666' }}
            boxShadow="md"
          >
            Learn More
          </Button>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="https://via.placeholder.com/500"
            alt="AI-driven solutions"
            borderRadius="lg"
            boxShadow="2xl"
          />
        </MotionBox>
      </SimpleGrid>

      {/* Event Section */}
      <Box bg="#e0f7fa" py="4rem">
        <Heading
          as="h3"
          size="lg"
          textAlign="center"
          mb="2.5rem"
          color="#ff7f50"
        >
          Upcoming Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="1200px" mx="auto">
          {[
            {
              title: 'Mental Health Awareness Webinar',
              description: 'Join us for an interactive webinar on mental health awareness.',
              imgSrc: 'https://via.placeholder.com/300',
              link: '#',
            },
            {
              title: 'AI & Mental Health Conference',
              description: 'Explore how AI is transforming mental health support.',
              imgSrc: 'https://via.placeholder.com/300',
              link: '#',
            },
            {
              title: 'Therapy Chatbot Workshop',
              description: 'Learn how to implement and use AI chatbots for therapy.',
              imgSrc: 'https://via.placeholder.com/300',
              link: '#',
            },
          ].map((event, index) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={event.link} _hover={{ textDecoration: 'none' }}>
                <Image
                  src={event.imgSrc}
                  alt={event.title}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                />
                <Box p="1.5rem">
                  <Heading as="h4" size="md" mb="0.5rem" color="#ff7f50">
                    {event.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.700" mb="1rem">
                    {event.description}
                  </Text>
                  <Button colorScheme="orange" size="sm">
                    Learn More
                  </Button>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* Call to Action Section */}
      <MotionBox
        bgGradient="linear(to-r, #ff7f50, #008080)"
        py="4rem"
        textAlign="center"
        px={{ base: "1rem", md: "4rem" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Heading as="h2" size="xl" mb="1.5rem" color="white">
          Ready to Transform Your Experience?
        </Heading>
        <Text fontSize="lg" color="white" mb="2rem" maxW="800px" mx="auto">
          Start using our AI chatbot today and experience the difference.
        </Text>
        <Button
          colorScheme="orange"
          size="lg"
          bg="#ff7f50"
          _hover={{ bg: '#e06b42' }}
          boxShadow="lg"
        >
          Get Started Now
        </Button>
      </MotionBox>
    </Box>
  );
};

export default Home;
