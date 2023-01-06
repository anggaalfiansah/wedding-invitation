/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */ 
import { FC, useState } from "react";
import { Box, Button, Container, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FaRegClock, FaSign } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

import { ReactComponent as InteractiveSvg } from "../assets/svg/interactive.svg";
import { ReactComponent as StaticSvg } from "../assets/svg/static.svg";
import CountdownComponent from "../components/CountdownComponent";

const Detail: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalOpen = () => {
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Container padding={0} overflowY={"auto"} bgGradient={"linear(pink, #e6faff, pink )"}>
      {/* header */}
      <>
        <Box marginY={"7.5rem"} overflow="hidden">
          <Text fontFamily={"billy_signature_slant"} fontSize={"3rem"} transform={"rotate(-10deg)"}>
            Angga
          </Text>
          <Text fontFamily={"billy_signature_slant"} fontSize={"2rem"}>
            &
          </Text>
          <Text fontFamily={"billy_signature_slant"} fontSize={"3rem"} transform={"rotate(-10deg)"}>
            Sarah
          </Text>
        </Box>
      </>
      {/* kata pembuka */}
      <>
        <Box marginBottom={"-0.5rem"} marginTop={"-1rem"}>
          <StaticSvg fill="#5a7178" width={"100%"} />
        </Box>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} backgroundColor={"#5a7178"} paddingX={"1.6rem"} paddingBottom={"1rem"}>
          <Image height={"7.5rem"} objectFit={"contain"} src={require("../assets/images/quotes_decor_flower_minimalist.png")} />
          <Text fontStyle={"italic"} color={"#fff"} marginY={"1.75rem"}>
            تَزَوَّجَ العَبْدُ فَقَدْ كَمَّلَ نَصْفَ الدِّيْنِ ، فَلْيَتَّقِ اللهَ فِي النِّصْفِ البَاقِي
          </Text>
          <Text fontStyle={"italic"} color={"#fff"}>
            “Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya. Karenanya, bertakwalah pada Allah pada separuh yang lainnya.” (HR. Al Baihaqi)
          </Text>
        </Box>
        <Box marginTop={"-1.25rem"} overflowX="hidden">
          <InteractiveSvg fill="#5a7178" />
        </Box>
      </>
      {/* detail mempelai */}
      <>
        <Box marginY={"1rem"}>
          <Text fontFamily={"billy_signature"} fontSize={"2.5rem"} color={"#5a7178"}>
            Angga Alfiansah
          </Text>
          <Text fontStyle={"italic"}>Putra Bapak Suwarjo & Ibu Kartika Sulistiyowati</Text>
        </Box>
        <Box
          paddingX={0}
          paddingY={["2.5rem", "5rem"]}
          backgroundImage={require("../assets/images/New_Project__1_.png")}
          backgroundSize={"contain"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
        >
          <Text fontFamily={"billy_signature"} fontSize={"2.5rem"}>
            &
          </Text>
        </Box>
        <Box marginY={"1rem"}>
          <Text fontFamily={"billy_signature"} fontSize={"3rem"} color={"#5a7178"}>
            Sarah Hariyanti
          </Text>
          <Text fontStyle={"italic"}>Putri Bapak Sunardi & Ibu Sumiyati</Text>
        </Box>
      </>
      {/* moment bahagia */}
      <>
        <Box
          paddingX={"3rem"}
          paddingY={["3rem", "7.5rem"]}
          backgroundImage={require("../assets/images/5698719-ai.png")}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          borderRadius={"1rem"}
          color={"#5a7178"}
        >
          <Text fontFamily={"billy_signature_slant"} fontSize={"3rem"} marginY={"2rem"}>
            Moment yang berharga
          </Text>
          <Text>"Saat kuputuskan bertemu orang tuamu Kuyakinkan diri kaulah yang terbaik Dan saat kau memilih aku yang pantas untukmu, Hati ini berikrar 'tuk s'lalu menjagamu"</Text>
        </Box>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} overflowX={"hidden"}>
          <Image borderRadius={"1rem"} border={"solid 5px #fff"} width={"50%"} src={require("../assets/images/WhatsApp Image 2023-01-06 at 13.31.20.jpg")} />
        </Box>
      </>
      {/* countdown */}
      <>
        <Box marginBottom={"-0.5rem"} marginTop={"-1rem"}>
          <StaticSvg fill="#5a7178" width={"100%"} />
        </Box>
        <Box
          paddingX={0}
          paddingY={["2rem", "7.5rem"]}
          backgroundImage={require("../assets/images/New_Project__5_.png")}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundColor={"#5a7178"}
        >
          <CountdownComponent />
        </Box>
        <Box marginTop={"-1.25rem"} overflowX="hidden">
          <InteractiveSvg fill="#5a7178" />
        </Box>
      </>
      {/* detail acara */}
      <>
        <Box padding={"1rem"}>
          <Box
            paddingX={0}
            paddingY={["2rem", "7.5rem"]}
            backgroundImage={require("../assets/images/New_Project__9_.png")}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundColor={"#5a71781c"}
            borderRadius={"1rem"}
            color={"#5a7178"}
          >
            <>
              <Text fontFamily={"billy_signature_slant"} fontSize={"2.5rem"} marginBottom={"2rem"}>
                Akad Nikah
              </Text>
              <Text>{dayjs("2023-01-08").format("dddd, DD MMMM YYYY")}</Text>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} fontSize={"1.25rem"} marginY={"1rem"}>
                <FaRegClock />
                <Text marginX={"0.5rem"}>08:00 WIB - Selesai</Text>
              </Box>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingX={"3rem"}>
                <FaSign />
                <Text marginX={"0.5rem"} fontWeight={"bold"}>
                  Rumah Sarah Hariyanti
                </Text>
              </Box>
              <Text>Dsn. Klumutan RT.05 RW.012 Desa Depok Kecamatan Toroh, Grobogan</Text>
              <a href="https://goo.gl/maps/15p9v4Kx97AjxmUX7" target="_blank" rel="noopener noreferrer">
                <Button colorScheme="teal" variant="outline" marginY={"2rem"}>
                  <Text>Lihat Lokasi</Text>
                </Button>
              </a>
            </>
            <Box display={"flex"} justifyContent={"center"} marginY={"1.5rem"}>
              <Image src={require("../assets/images/Vector_Smart_Object1-ai__1___1_.png")} />
            </Box>
            <>
              <Text fontFamily={"billy_signature_slant"} fontSize={"2.5rem"} marginBottom={"2rem"}>
                Resepsi
              </Text>
              <Text>{dayjs("2023-01-08").format("dddd, DD MMMM YYYY")}</Text>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} fontSize={"1.25rem"} marginY={"1rem"}>
                <FaRegClock />
                <Text marginX={"0.5rem"}>10:00 WIB - Selesai</Text>
              </Box>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingX={"3rem"}>
                <FaSign />
                <Text marginX={"0.5rem"} fontWeight={"bold"}>
                  Rumah Sarah Hariyanti
                </Text>
              </Box>
              <Text>Dsn. Klumutan RT.05 RW.012 Desa Depok Kecamatan Toroh, Grobogan</Text>
              <a href="https://goo.gl/maps/15p9v4Kx97AjxmUX7" target="_blank" rel="noopener noreferrer">
                <Button colorScheme="teal" variant="outline" marginY={"2rem"}>
                  <Text>Lihat Lokasi</Text>
                </Button>
              </a>
            </>
            <Box display={"flex"} justifyContent={"center"} marginY={"1.5rem"}>
              <Image src={require("../assets/images/Vector_Smart_Object1-ai__1___1_.png")} />
            </Box>
          </Box>
        </Box>
      </>
      {/* map lokasi */}
      <>
        <Box padding={"1rem"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.058953030635!2d110.91446176060892!3d-7.130338456192569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70aff1fbd3a669%3A0x130c01675fa730e3!2zN8KwMDcnNDguNSJTIDExMMKwNTQnNTEuNyJF!5e1!3m2!1sid!2sid!4v1672932493035!5m2!1sid!2sid"
            width={"100%"}
            height={400}
            style={{ borderRadius: "1rem", border: "solid 2px #eee" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Text marginY={"1rem"}>Dsn. Klumutan RT.05 RW.012 Desa Depok Kecamatan Toroh, Grobogan</Text>
          <a href="https://goo.gl/maps/15p9v4Kx97AjxmUX7" target="_blank" rel="noopener noreferrer">
            <Button colorScheme="teal" variant="outline" marginY={"1rem"}>
              <Text>Lihat Lokasi</Text>
            </Button>
          </a>
        </Box>
      </>
      {/* penutup */}
      <>
        <Box marginY={"2rem"}>
          <Text paddingX={"2rem"} textAlign={"center"}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
          </Text>
          <Box marginY={"1rem"}>
            <Text textTransform={"uppercase"} fontWeight={"bold"}>
              Turut Mengundang
            </Text>
            <Text>Keluarga Besar PT Digital Seucom Indonesia</Text>
          </Box>
        </Box>
      </>
      {/* footer */}
      <>
        <Box paddingY={["3rem", "7.5rem"]} backgroundImage={require("../assets/images/New_Project__12_.png")} backgroundSize={"contain"} backgroundPosition={"bottom"} backgroundRepeat={"no-repeat"}>
          <Box>
            <Text fontFamily={"billy_signature_slant"} fontSize={"1.5rem"}>
              Hormat kami
            </Text>
            <Text fontFamily={"billy_signature"} fontSize={"1.75rem"} marginTop={"1rem"} marginBottom={"3rem"}>
              Angga & Sarah
            </Text>
          </Box>
          <Box>
            <Button colorScheme="teal" marginY={"2rem"} onClick={onModalOpen}>
              Kirim Hadiah
            </Button>
          </Box>
        </Box>
      </>
      {/* modal kirim hadiah */}
      <>
        <Modal isOpen={isModalOpen} onClose={onModalClose} size={"lg"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kirim Hadiah</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box marginY={"0.25rem"}>
                <Text fontWeight={"bold"}>Kirim Kado</Text>
                <Box border={"solid 2px #eee"} padding={"1rem"}>
                  <Text>Sarah Hariyanti / Angga Alfiansah</Text>
                  <Text>Dsn. Klumutan RT.05 RW.012 Desa Depok, Kecamatan Toroh, Kabupaten Grobogan 58171</Text>
                </Box>
              </Box>
              <Box marginY={"0.25rem"}>
                <Text fontWeight={"bold"}>Direct Transfer</Text>
                <Box border={"solid 2px #eee"} padding={"1rem"} marginY={"0.5rem"}>
                  <Text fontWeight={"bold"}>Bank BCA</Text>
                  <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    <Text marginRight={"10px"}>5050 1468 90</Text>
                    <CopyToClipboard text={"5050146890"}>
                      <MdOutlineContentCopy fontSize={"1.25rem"} />
                    </CopyToClipboard>
                  </Box>
                  <Text>a/n Angga Alfiansah</Text>
                </Box>
                <Box border={"solid 2px #eee"} padding={"1rem"} marginY={"0.5rem"}>
                  <Text fontWeight={"bold"}>Bank Mandiri</Text>
                  <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    <Text marginRight={"10px"}>1670 0029 5620 8</Text>
                    <CopyToClipboard text={"1670002956208"}>
                      <MdOutlineContentCopy fontSize={"1.25rem"} />
                    </CopyToClipboard>
                  </Box>
                  <Text>a/n Angga Alfiansah</Text>
                </Box>
                <Box border={"solid 2px #eee"} padding={"1rem"} marginY={"0.5rem"}>
                  <Text fontWeight={"bold"}>Bank BRI</Text>
                  <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    <Text marginRight={"10px"}>6012 0102 5786 533</Text>
                    <CopyToClipboard text={"601201025786533"}>
                      <MdOutlineContentCopy fontSize={"1.25rem"} />
                    </CopyToClipboard>
                  </Box>
                  <Text> a/n Sarah Hariyanti</Text>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" variant={"outline"} mr={3} onClick={onModalClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Container>
  );
};

export default Detail;
