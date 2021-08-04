import React from "react";
import { Box, Flex, Heading, Link, HStack, Button } from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex
      w={"80%"}
      mx={"auto"}
      my={2}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box>
        <Heading as="h1" fontSize="3xl" fontWeight="bold">
          Elbe
        </Heading>
      </Box>
      <HStack spacing={10}>
        <Link>Inicio</Link>
        <Link>Menú</Link>
        <Link>Sobre Nosotros</Link>
        <Link>Contacto</Link>
      </HStack>
      <HStack>
        <Button colorScheme="teal" bg="blue.600">
          pedido
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
