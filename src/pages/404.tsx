import React from "react";
import { Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
function Page() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={"blue.500"}
      height="100vh"
      width="100vw"
    >
      <Image src="/svg/404.svg" width={450} height={450} />;
      <NextLink href="/" passHref>
        <Button variant="ghost" as="a">
          Inicio
        </Button>
      </NextLink>
    </Box>
  );
}

export default Page;
