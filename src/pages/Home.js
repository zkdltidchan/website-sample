import React from 'react';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { CustomButtonRedHover, CustomButtonOutline } from '../components/CustomeButton';

import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
const Home = () => {
  return (
    <Box w="100%" maxW="container.xl" mx="auto" p={4}>
      <Text fontSize="xl" mb={4}>
        Home Page
      </Text>
      <VStack spacing={4} align="stretch">
        {/* button example */}
        <HStack spacing={4} wrap="wrap">
        <Button>Chakra Button With Default colorScheme</Button>
          <Button colorScheme="teal">Chakra Button 1</Button>
          <Button colorScheme="red">Chakra Button 2</Button>
          <Button colorScheme="teal" variant="ghost">Chakra Button 3</Button>
          <Button colorScheme="teal" variant="link">Chakra Button 4</Button>
        </HStack>
        {/* custome button example */}
        <HStack spacing={4} wrap="wrap">
          <CustomButtonRedHover>Custom Button</CustomButtonRedHover>
          <CustomButtonOutline>Custom Button 2</CustomButtonOutline>
          <CustomButtonOutline size="sm">Custom Button 3</CustomButtonOutline>
          <ColorModeSwitcher/>
        </HStack>
        
      </VStack>
    </Box>
  );
};

export default Home;
