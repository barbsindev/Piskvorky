import {
  Container,
  Text,
  Heading,
  Center,
  NativeBaseProvider,
  Input,
} from "native-base";
import React from "react";

const Chat = () => {
  return (
    <Center flex={1} px="3">
      <Container>
        <Input
          mx="3"
          placeholder="Input"
          w={{
            base: "75%",
            md: "25%",
          }}
        />
      </Container>
    </Center>
  );
};

export default Chat;
