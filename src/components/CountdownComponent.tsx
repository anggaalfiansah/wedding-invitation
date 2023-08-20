import { FC } from "react";
import dayjs from "dayjs";
import Countdown from "react-countdown";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { CONFIG } from "utils/config";

const CountdownComponent: FC = () => {
  return (
    <Countdown
      date={new Date(CONFIG.TANGGAL_PERNIKAHAN)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return (
            <Box marginBottom={"2rem"} paddingX={"2rem"}>
              <Text fontFamily={"billy_signature"} fontSize={"2rem"} color={"#fff"}>
                Acara sedang berlangsung
              </Text>
            </Box>
          );
        } else {
          // Render a countdown
          return (
            <>
              <Box marginBottom={"2rem"} paddingX={"2rem"}>
                <Text fontFamily={"billy_signature"} fontSize={"2rem"} color={"#fff"}>
                  Acara akan Diselenggarakan
                </Text>
              </Box>
              <Box paddingX={"5rem"} color={"#fff"}>
                <Box textAlign={"center"}>
                  <Text fontFamily={"billy_signature"} fontSize={"2rem"}>
                    {days > 9 ? days : "0" + days}
                  </Text>
                  <Text textTransform={"capitalize"} fontFamily={"billy_signature"} fontWeight="bold" fontSize={"1rem"}>
                    Hari
                  </Text>
                </Box>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} marginY={"1rem"}>
                  <Box textAlign={"center"}>
                    <Text fontFamily={"billy_signature"} fontSize={"1.5rem"}>
                      {hours > 9 ? hours : "0" + hours}
                    </Text>
                    <Text textTransform={"capitalize"} fontFamily={"billy_signature"} fontWeight="bold">
                      Jam
                    </Text>
                  </Box>
                  <Box textAlign={"center"}>
                    <Text fontFamily={"billy_signature"} fontSize={"1.5rem"}>
                      {minutes > 9 ? minutes : "0" + minutes}
                    </Text>
                    <Text textTransform={"capitalize"} fontFamily={"billy_signature"} fontWeight="bold">
                      Menit
                    </Text>
                  </Box>
                  <Box textAlign={"center"}>
                    <Text fontFamily={"billy_signature"} fontSize={"1.5rem"}>
                      {seconds > 9 ? seconds : "0" + seconds}
                    </Text>
                    <Text textTransform={"capitalize"} fontFamily={"billy_signature"} fontWeight="bold">
                      Detik
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Text color={"#fff"} marginY={"2rem"}>
                {dayjs(CONFIG.TANGGAL_PERNIKAHAN).format("dddd, DD MMMM YYYY")}
              </Text>
              <Box marginY={"1rem"}>
                <a href={CONFIG.LINK_CALENDAR} rel="noreferrer" target="_blank">
                  <Button>
                    <FaRegCalendarPlus />
                    <Text marginX={"0.5rem"}>Simpan acara ke kalender</Text>
                  </Button>
                </a>
              </Box>
            </>
          );
        }
      }}
    />
  );
};

export default CountdownComponent;
