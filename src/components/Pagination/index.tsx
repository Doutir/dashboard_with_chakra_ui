import {Stack, HStack,Button,Box,Text} from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";
export function Pagination(){
  return(
    <Stack
      mt={8}
      direction={['column','row']}
      justify="space-between"
      align='center'
      spacing={6}
    >
      <Box>
        <Text  size="sm" as="strong" >0</Text> - <Text size="sm" as="strong" >10</Text> de <Text size="sm" as="strong" >100</Text>
      </Box>
      <HStack spacing={2}>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  );
}