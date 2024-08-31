import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Textarea, HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Simulate bot starting the conversation
  useEffect(() => {
    setTimeout(() => {
      setMessages([{ text: 'Hello! How can I assist you today?', user: 'AI' }]);
    }, 500); // Delay to simulate thinking
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      // User's message
      setMessages((prevMessages) => [...prevMessages, { text: input, user: 'You' }]);

      // Placeholder bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Thanks for your message. Let me think...', user: 'AI' },
        ]);
      }, 1000); // Delay to simulate bot thinking

      setInput(''); // Clear the input field
    }
  };

  return (
    <Box
      bg="#e0f7fa" // Light teal background
      height="calc(100vh - 120px)"
      width="100%"
      borderRadius="lg"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      boxShadow="lg"
    >
      {/* Message list */}
      <VStack
        spacing={4}
        align="stretch"
        overflowY="auto"
        flexGrow={1}
        padding={4}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
      >
        {messages.map((msg, index) => (
          <MotionBox
            key={index}
            alignSelf={msg.user === 'AI' ? 'flex-start' : 'flex-end'}
            bg={msg.user === 'AI' ? '#008080' : '#ff7f50'} // Teal for AI, Coral for user
            p={3}
            borderRadius="lg"
            maxWidth="75%"
            boxShadow="sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontWeight="bold" color="white">
              {msg.user}
            </Text>
            <Text color="white">{msg.text}</Text>
          </MotionBox>
        ))}
      </VStack>

      {/* Input area */}
      <Box mt={4}>
        <HStack spacing={2}>
          <Textarea
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            resize="none"
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
            flex="1"
            p={4}
            _focus={{ borderColor: '#008080' }} // Teal focus
          />
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              colorScheme="teal"
              bg="#008080" // Teal button background
              size="lg"
              onClick={handleSend}
              boxShadow="md"
              _hover={{ bg: '#006666' }} // Darker teal on hover
            >
              Send
            </Button>
          </MotionBox>
        </HStack>
      </Box>
    </Box>
  );
}

export default Chatbox;
