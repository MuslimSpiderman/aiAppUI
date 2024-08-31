import React from 'react';
import {
  Box,
  Input,
  FormLabel,
  Button,
  VStack,
  Heading,
  Text,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
} from '@chakra-ui/react';

function FormPage() {
  return (
    <Box mt={20} p={8} bg="#e0f7fa" minHeight="80vh">
      <Box maxW="600px" mx="auto" p={6} bg="white" boxShadow="lg" borderRadius="md">
        {/* Form Heading */}
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="#008080">
          User Information
        </Heading>

        {/* Form Subtext */}
        <Text mb={6} textAlign="center" color="#333333">
          Please fill out the form below to help us better assist you.
        </Text>

        {/* Form Inputs */}
        <VStack spacing={5}>
          {/* Name */}
          <Box width="100%">
            <FormLabel color="#008080">Name</FormLabel>
            <Input placeholder="Enter your name" focusBorderColor="#ff7f50" />
          </Box>

          {/* Gender */}
          <Box width="100%">
            <FormLabel color="#008080">Gender</FormLabel>
            <RadioGroup defaultValue="male">
              <Stack direction="row" spacing={5}>
                <Radio value="male" colorScheme="teal">
                  Male
                </Radio>
                <Radio value="female" colorScheme="teal">
                  Female
                </Radio>
                <Radio value="other" colorScheme="teal">
                  Other
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          {/* Date of Birth */}
          <Box width="100%">
            <FormLabel color="#008080">Date of Birth</FormLabel>
            <Input type="date" focusBorderColor="#ff7f50" />
          </Box>

          {/* Phone Number */}
          <Box width="100%">
            <FormLabel color="#008080">Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" focusBorderColor="#ff7f50" />
          </Box>

          {/* Occupation */}
          <Box width="100%">
            <FormLabel color="#008080">Occupation</FormLabel>
            <Input placeholder="Enter your occupation" focusBorderColor="#ff7f50" />
          </Box>

          {/* Hobbies */}
          <Box width="100%">
            <FormLabel color="#008080">Hobbies</FormLabel>
            <Input placeholder="Enter your hobbies" focusBorderColor="#ff7f50" />
          </Box>

          {/* Health Conditions */}
          <Box width="100%">
            <FormLabel color="#008080">Health Conditions</FormLabel>
            <Select placeholder="Select health condition" focusBorderColor="#ff7f50">
              <option value="none">None</option>
              <option value="anxiety">Anxiety</option>
              <option value="depression">Depression</option>
              <option value="chronic-illness">Chronic Illness</option>
              <option value="other">Other</option>
            </Select>
          </Box>

          {/* Accept Terms */}
          <Box width="100%">
            <Checkbox colorScheme="teal" focusBorderColor="#ff7f50">
              I accept the terms and conditions
            </Checkbox>
          </Box>

          {/* Submit Button */}
          <Button
            colorScheme="teal"
            bg="#008080"
            size="lg"
            width="100%"
            _hover={{ bg: '#006666' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default FormPage;
