import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  IconButton, 
  useDisclosure, 
  Drawer, 
  DrawerBody, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  Link
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="teal.500" color="white" py={4}>
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
        <Heading as="h1" size="lg">
          My React App
        </Heading>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" mx={2}>
            About
          </Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <Link as={RouterLink} to="/" onClick={onClose} display="block" my={2}>
                Home
              </Link>
              <Link as={RouterLink} to="/about" onClick={onClose} display="block" my={2}>
                About
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
