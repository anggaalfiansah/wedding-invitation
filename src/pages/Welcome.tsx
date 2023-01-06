import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";

const Welcome: FC<{ setIsOpened: Function }> = (props) => {
  const { setIsOpened } = props;

  const [searchParams] = useSearchParams();

  return (
    <Container padding={0} overflowY={"auto"} bgGradient={"linear(pink, #e6faff)"}>
      <Box position="relative">
        <Box position={"absolute"} left={0} right={0} top="30vh" display="flex" flexDirection={"column"} justifyContent={"center"} alignItems="center">
          <Text textTransform={"uppercase"}>Undangan pernikahan</Text>
          <Text fontFamily={"billy_signature"} fontSize={"2rem"} my={"2rem"}>
            Angga & Sarah
          </Text>
          <Text>{dayjs("2023-01-08").format("dddd, DD MMMM YYYY")}</Text>
          <Box marginY={"1.5rem"} hidden={!searchParams.get("guest")}>
            <Text fontStyle={"italic"}>Kepada Yth. Bapak/Ibu/Saudara/i</Text>
            <Text textTransform={"capitalize"} fontFamily={"billy_signature"} fontWeight={"bold"} fontSize={"1.5rem"} marginY={"1rem"}>
              {searchParams.get("guest")}
            </Text>
          </Box>
          <Button marginTop={"2rem"} marginBottom={"1rem"} colorScheme="teal" variant="outline" className="blink" onClick={() => setIsOpened(true)}>
            Buka Undangan
          </Button>
        </Box>
      </Box>
      <Image width={"100%"} height={"100%"} objectFit={"cover"} src={require("../assets/images/welcome_decor_mobile_7.png")} />
    </Container>
  );
};

export default Welcome;
