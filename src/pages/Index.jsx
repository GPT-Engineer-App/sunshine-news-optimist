import { Box, Button, Flex, Grid, Heading, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaBullhorn, FaHeart, FaNewspaper, FaRegClock, FaRegEnvelope, FaRegSmileBeam } from "react-icons/fa";

const Index = () => {
  // Defining card data for demonstration purposes
  const cardData = [
    {
      title: "Renewable Energy on the Rise",
      description: "The latest stats show a positive trend towards sustainable energy solutions.",
      readTime: "3 min read",
      author: "Jane Doe",
      email: "jane.doe@example.com",
      icon: <FaBullhorn color="#FFD700" />,
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MHx8fHwxNzA5NzU1MDExfDA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    // ... add more card data as needed
  ];

  const renderCard = (card) => (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4} boxShadow="sm">
      <Image src={card.imageUrl} alt={card.title} />
      <Flex align="center" mt={2}>
        <Box flexShrink={0}>{card.icon}</Box>
        <Box ml={2}>
          <Text fontWeight="bold" fontSize="lg">
            {card.title}
          </Text>
          <Text fontSize="sm">{card.description}</Text>
          <Flex align="center" mt={2}>
            <FaRegClock />
            <Text ml={1} fontSize="xs">
              {card.readTime}
            </Text>
          </Flex>
          <Flex align="center" mt={1}>
            <FaRegEnvelope />
            <Text ml={1} fontSize="xs">
              {card.author} - <Link href={`mailto:${card.email}`}>{card.email}</Link>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box bg="#1A365D" minH="100vh" color="white">
      <Flex as="header" justifyContent="space-between" alignItems="center" p={4} bg="transparent">
        <Box position="relative" w="100px" h="100px">
          <FaRegSmileBeam color="#FFD700" size="5em" />
        </Box>
        <Flex as="nav" gap={6}>
          <Link href="#">Om oss</Link>
          <Link href="#">Gratis nyhetsbrev</Link>
        </Flex>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between" p={8} pt={16}>
        <Box>
          <Heading as="h1" size="2xl" mb={2}>
            Faktabaserade optimistiska nyheter
          </Heading>
          <Text fontSize="xl" mb={4}>
            med den arge optimisten
          </Text>
          <Button colorScheme="pink" borderRadius="full" size="lg" leftIcon={<FaHeart />}>
            Prenumerera gratis
          </Button>
        </Box>
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src="https://images.unsplash.com/photo-1568337339905-7165c43848b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwdC1zaGlydCUyMGZ1dHVyZXxlbnwwfHx8fDE3MDk3NTUwMTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Make the future come sooner" />
        </Box>
      </Flex>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} p={8}>
        {cardData.map(renderCard)}
      </Grid>
    </Box>
  );
};

export default Index;
