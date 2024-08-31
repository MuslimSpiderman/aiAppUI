import React from 'react';
import { Box, Flex, Text, Link, IconButton, HStack, StackDivider } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="teal.600" color="white" py={6} px={4} mt={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'center' }}
        justify={{ base: 'center', md: 'space-between' }}
        maxW="1200px"
        mx="auto"
      >
        <Text mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} LLaMA Chatbot. All rights reserved.
        </Text>
        <HStack
          spacing={6}
          divider={<StackDivider borderColor="teal.400" />}
          justify={{ base: 'center', md: 'flex-end' }}
          flexGrow={1}
        >
          <Link href="https://twitter.com" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="whiteAlpha"
              _hover={{ bg: 'teal.400', color: 'white' }}
              size="lg"
              isRound
              boxShadow="md"
            />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              colorScheme="whiteAlpha"
              _hover={{ bg: 'teal.400', color: 'white' }}
              size="lg"
              isRound
              boxShadow="md"
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="whiteAlpha"
              _hover={{ bg: 'teal.400', color: 'white' }}
              size="lg"
              isRound
              boxShadow="md"
            />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
