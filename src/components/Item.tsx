import React from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { Badge } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "@emotion/styled";
import { Iplate } from "@app/libs/Restaurant";
import NextLink from "next/link";
const WrapperIcon = styled.div`
  svg {
    font-size: 30px;
    color: white;
  }
`;

type Props = {
  item: Iplate;
};
function Item({ item }: Props) {
  return (
    <Box
      boxShadow="lg"
      width="700px"
      as="li"
      my={2}
      padding="5px"
      cursor="pointer"
      display="flex"
      justifyContent="space-between"
    >
      <Flex
        m={2}
        justifyContent="center"
        alignItems="center"
        maxWidth="100px"
        overflow="hidden"
      >
        <Image src={item.image} width={150} height={100} objectFit="cover" />
      </Flex>
      <Flex direction="row" alignItems="center" p={2}>
        <VStack pr={2} alignItems="flex-start">
          <Text as="h1" fontSize="lg" fontWeight="bold">
            <NextLink href={`/plates/${item.slug}`} passHref>
              <Link>{item.name}</Link>
            </NextLink>
          </Text>
          <Text fontWeight="semibold">{item.price}</Text>
          <Text as="p">{item.description}</Text>
          <HStack>
            {item.tags.map((item, idx) => {
              return <Badge key={idx}> {item}</Badge>;
            })}
          </HStack>
        </VStack>
        <Button bg={"blue.600"}>
          <WrapperIcon>
            <AiOutlinePlus />
          </WrapperIcon>
        </Button>
      </Flex>
    </Box>
  );
}

export default Item;
