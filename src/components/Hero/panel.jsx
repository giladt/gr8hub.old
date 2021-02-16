import { Center, WrapItem } from "@chakra-ui/react";

export default function Panel({children}){
  return (
    <WrapItem flex={1} minW="300px">
      <Center w="100%" bg="white" h="75vh">
        {children}
      </Center>
    </WrapItem>
  )
}