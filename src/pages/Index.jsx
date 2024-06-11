import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="brand.700" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Personal Blog</Heading>
            <Flex>
              <Link href="/" mx={2}>Home</Link>
              <Link href="/about" mx={2}>About</Link>
              <Link href="/blog" mx={2}>Blog</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 1</Heading>
            <Text mt={4}>This is a summary of the blog post content. Click to read more...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 2</Heading>
            <Text mt={4}>This is a summary of the blog post content. Click to read more...</Text>
          </Box>
          {/* Add more blog post summaries as needed */}
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;