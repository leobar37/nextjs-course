import NavBar from "../components/Navbar";
import { useCallback, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps, GetServerSideProps } from "next";
import Item from "@app/components/Item";
import { Iplate, Restaurant } from "@app/libs/Restaurant";

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const restaurant = new Restaurant();
  const plates = await restaurant.plates();
  return {
    props: {
      plates: plates,
    },
  };
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
//   const restaurant = new Restaurant();
//   const plates = await restaurant.plates();
//   return {
//     props: {
//       plates: plates,
//     },
//   };
// };

type Props = {
  plates: Iplate[];
};

export default function Home({ plates }: Props) {
  console.log(plates);

  return (
    <>
      <NavBar />
      <Box
        bg="blue.600"
        d="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={"500px"}
        w={"100%"}
      >
        <Heading fontSize="6xl" color="white">
          Menú
        </Heading>
      </Box>
      <Flex
        mt={5}
        w="80%"
        mx="auto"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {plates.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </Flex>
    </>
  );
}
