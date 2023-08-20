import dayjs from "dayjs";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { CONFIG, WELCOME_FRAME } from "utils/config";

interface WelcomeProps {
  toggle: () => void;
  guest: string | undefined;
}

const Welcome = (props: WelcomeProps) => {
  const { toggle, guest } = props;
  return (
    <Container textAlign={"center"} padding={0} overflowY={"auto"} bgGradient={`linear(${CONFIG.BASE_COLOR}, ${CONFIG.SECOND_COLOR})`}>
      <Box position="relative">
        <Box position={"absolute"} left={0} right={0} top="30vh" display="flex" flexDirection={"column"} justifyContent={"center"} alignItems="center">
          <Text textTransform={"uppercase"}>Undangan pernikahan</Text>
          <Text fontFamily={"billy_signature"} fontSize={"2rem"} my={"2rem"}>
            {`${CONFIG.MEMPELAI_PRIA_PANGGILAN} & ${CONFIG.MEMPELAI_WANITA_PANGGILAN}`}
          </Text>
          <Text>{dayjs(CONFIG.TANGGAL_PERNIKAHAN).format("dddd, DD MMMM YYYY")}</Text>
          <Box marginY={"1.5rem"} hidden={!guest}>
            <Text fontStyle={"italic"}>Kepada Yth. Bapak/Ibu/Saudara/i</Text>
            <Text textTransform={"capitalize"} fontFamily={"billy_signature"} fontWeight={"bold"} fontSize={"1.5rem"} marginY={"1rem"}>
              {guest}
            </Text>
          </Box>
          <Button marginTop={"2rem"} marginBottom={"1rem"} colorScheme="teal" variant="outline" className="blink" onClick={toggle}>
            Buka Undangan
          </Button>
        </Box>
      </Box>
      <Image width={"100%"} height={"100%"} objectFit={"cover"} src={WELCOME_FRAME} />
    </Container>
  );
};

export default Welcome;
