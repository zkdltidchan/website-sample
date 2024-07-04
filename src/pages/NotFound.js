import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Spinner } from '@chakra-ui/react';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/website-sample'); // Redirect to the homepage or any other page
    }, 3000); // 3 seconds delay
  }, [navigate]);

  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="50px">404</Text>
      <Text fontSize="24px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        Redirecting to the homepage...
      </Text>
      <Spinner size="xl" />
    </Box>
  );
};

export default NotFound;
