import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" py={4} mt={8}>
      <Text textAlign="center">&copy; 2024 My React App</Text>
    </Box>
  );
};

export default Footer;
