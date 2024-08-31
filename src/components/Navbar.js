import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavBarContainer>
      <NavHeader />
      <NavMenuToggle isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <NavLinks isOpen={isOpen} onClose={onClose} />
    </NavBarContainer>
  );
}

const NavBarContainer = ({ children }) => {
  const bgColor = useColorModeValue('teal.500', 'teal.700');

  return (
    <Box
      bg={bgColor}
      px={6}
      boxShadow="md"
      position="fixed"
      width="100%"
      zIndex="100"
      top={0}
      transition="all 0.3s"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {children}
      </Flex>
    </Box>
  );
};

const NavHeader = () => {
  const textColor = useColorModeValue('white', 'gray.100');

  return (
    <Heading as="h1" size="lg" color={textColor}>
      LLaMA Chatbot
    </Heading>
  );
};

const NavMenuToggle = ({ isOpen, onOpen, onClose }) => {
  const textColor = useColorModeValue('white', 'gray.100');
  const hoverColor = useColorModeValue('teal.400', 'teal.600');

  return (
    <IconButton
      size="md"
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label="Open Menu"
      display={{ md: 'none' }}
      onClick={isOpen ? onClose : onOpen}
      color={textColor}
      bg="transparent"
      _hover={{ bg: hoverColor }}
    />
  );
};

const NavLinks = ({ isOpen, onClose }) => {
  const textColor = useColorModeValue('white', 'gray.100');
  const hoverColor = useColorModeValue('teal.400', 'teal.600');

  const links = [
    { to: '/', label: 'Home' },
    { to: '/chat', label: 'Chat' },
    { to: '/form', label: 'Form' },
  ];

  return (
    <>
      <HStack
        as="nav"
        spacing={8}
        display={{ base: 'none', md: 'flex' }}
        color={textColor}
        ml="auto"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            label={link.label}
            hoverColor={hoverColor}
          />
        ))}
      </HStack>

      {isOpen && (
        <MotionBox
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          pb={4}
          display={{ md: 'none' }}
        >
          <Stack as="nav" spacing={4} color={textColor}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                onClick={onClose}
                hoverColor={hoverColor}
              />
            ))}
          </Stack>
        </MotionBox>
      )}
    </>
  );
};

const NavLink = ({ to, label, onClick, hoverColor }) => (
  <Link
    as={RouterLink}
    to={to}
    onClick={onClick}
    _hover={{ textDecoration: 'underline', color: hoverColor }}
  >
    {label}
  </Link>
);

export default Navbar;
