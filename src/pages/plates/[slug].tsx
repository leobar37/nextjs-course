import React from "react";
import NavBar from "@app/components/Navbar";
import { Box, Flex, VStack, Text, Button } from "@chakra-ui/react";
import NexImage from "next/image";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import restaurant, { Iplate } from "@app/libs/Restaurant";

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   ctx: GetServerSidePropsContext
// ) => {
//   const { slug } = ctx.query as { slug: string };
//   const plate = await restaurant.platesBySlug(slug);
//   if (!plate) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: true,
//       },
//     };
//   }
//   return {
//     props: {
//       item: plate,
//     },
//   };
// };

export const getStaticProps: GetStaticProps<Props> = async (
  ctx: GetStaticPropsContext
) => {
  const { slug } = ctx.params as { slug: string };
  const plate = await restaurant.platesBySlug(slug);
  if (!plate) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {
      item: plate,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const plates = await restaurant.plates();

  const paths = plates.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

type Props = {
  item: Iplate;
};
function plate({ item }: Props) {
  return (
    <>
      <NavBar />
      <Flex
        width={"60%"}
        style={{ paddingTop: "80px" }}
        flexDirection="row"
        mx={"auto"}
      >
        <Box width={"50%"} textAlign="center">
          <NexImage src={item.image} width={350} height={350} />
        </Box>
        <VStack alignItems="flex-start" spacing={9}>
          <Text fontWeight="bold" fontSize="3xl">
            {item.name}
          </Text>
          <Text>{item.description}</Text>
          <Text as="span" fontWeight="semibold">
            {item.price}
          </Text>
          <Button colorScheme="blue">Comprar</Button>
        </VStack>
      </Flex>
    </>
  );
}

export default plate;
