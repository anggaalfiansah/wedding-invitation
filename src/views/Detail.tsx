import { FC, useState } from "react";
import dayjs from "dayjs";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Box, Button, Container, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

import { FaRegClock, FaSign } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

import { CONFIG, BUNGA_SAMBUTAN, BUNGA_IKAT, BACKGROUND_BUNGA, BACKGROUND_BUNGA2, BACKGROUND_BUNGA3, GARIS_BUNGA, BACKGROUND_BUNGA4, SVG_STATIC, SVG_INTERACTIVE } from "../utils/config";

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
    <Container textAlign={"center"} padding={0} overflowY={"auto"} bgGradient={`linear(${CONFIG.BASE_COLOR}, ${CONFIG.SECOND_COLOR}, ${CONFIG.BASE_COLOR} )`}>
      {/* header */}
      <Box marginY={"7.5rem"} overflow="hidden" color={CONFIG.TEXT_COLOR}>
        <Text fontFamily={"billy_signature_slant"} fontSize={"3rem"} transform={"rotate(-10deg)"}>
          {CONFIG.MEMPELAI_PRIA_PANGGILAN}
        </Text>
        <Text fontFamily={"billy_signature_slant"} fontSize={"2rem"}>
          &
        </Text>
        <Text fontFamily={"billy_signature_slant"} fontSize={"3rem"} transform={"rotate(-10deg)"}>
          {CONFIG.MEMPELAI_WANITA_PANGGILAN}
        </Text>
      </Box>
      {/* kata pembuka */}
      <>
        <Box marginBottom={"-0.5rem"} marginTop={"-1rem"}>
          <SVG_STATIC fill="#5a7178" width={"100%"} />
        </Box>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} backgroundColor={"#5a7178"} paddingX={"1.6rem"} paddingBottom={"1rem"}>
          <Image height={"7.5rem"} objectFit={"contain"} src={BUNGA_SAMBUTAN} />
          <Text fontStyle={"italic"} color={"#fff"} marginY={"1.75rem"}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </Text>
          <Text fontStyle={"italic"} color={"#fff"}>
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu
            rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QR. Ar-Rum Ayat 21)
          </Text>
        </Box>
        <Box marginTop={"-1.25rem"} overflowX="hidden">
          <SVG_INTERACTIVE fill="#5a7178" />
        </Box>
      </>
      {/* detail mempelai */}
      <>
        <Box marginY={"1rem"}>
          <Text fontFamily={"billy_signature"} fontSize={"2.5rem"} color={"#5a7178"}>
            {CONFIG.MEMPELAI_PRIA}
          </Text>
          <Text fontStyle={"italic"}>{`Putra ${CONFIG.BAPAK_MEMPELAI_PRIA} & ${CONFIG.IBU_MEMPELAI_PRIA}`}</Text>
        </Box>
        <Box paddingX={0} paddingY={["2.5rem", "5rem"]} backgroundImage={BUNGA_IKAT} backgroundSize={"contain"} backgroundRepeat={"no-repeat"} backgroundPosition={"center"}>
          <Text fontFamily={"billy_signature"} fontSize={"2.5rem"}>
            &
          </Text>
        </Box>
        <Box marginY={"1rem"}>
          <Text fontFamily={"billy_signature"} fontSize={"2.5rem"} color={"#5a7178"}>
            {CONFIG.MEMPELAI_WANITA}
          </Text>
          <Text fontStyle={"italic"}>{`Putri ${CONFIG.BAPAK_MEMPELAI_WANITA} & ${CONFIG.IBU_MEMPELAI_WANITA}`}</Text>
        </Box>
      </>
      {/* moment bahagia */}
      <Box paddingX={"3rem"} paddingY={["3rem", "7.5rem"]} backgroundImage={BACKGROUND_BUNGA} backgroundSize={"cover"} backgroundPosition={"center"} borderRadius={"1rem"} color={"#5a7178"}>
        <Text fontFamily={"billy_signature_slant"} fontSize={"3rem"} marginY={"2rem"}>
          Moment yang berharga
        </Text>
        <Text>"Saat kuputuskan bertemu orang tuamu Kuyakinkan diri kaulah yang terbaik Dan saat kau memilih aku yang pantas untukmu, Hati ini berikrar 'tuk s'lalu menjagamu"</Text>
      </Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} overflowX={"hidden"}>
        <Image borderRadius={"1rem"} border={"solid 5px #fff"} width={"75%"} src={CONFIG.MOMENT_BAHAGIA_FOTO} />
      </Box>
      {/* countdown */}
      <Box marginBottom={"-0.5rem"} marginTop={"-1rem"}>
        <SVG_STATIC fill="#5a7178" width={"100%"} />
      </Box>
      <Box paddingX={0} paddingY={["2rem", "7.5rem"]} backgroundImage={BACKGROUND_BUNGA2} backgroundSize={"cover"} backgroundPosition={"center"} backgroundColor={"#5a7178"}>
        <CountdownComponent />
      </Box>
      <Box marginTop={"-1.25rem"} overflowX="hidden">
        <SVG_INTERACTIVE fill="#5a7178" />
      </Box>
      {/* detail acara */}
      <Box padding={"1rem"}>
        <Box
          paddingX={0}
          paddingY={["2rem", "7.5rem"]}
          backgroundImage={BACKGROUND_BUNGA3}
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
            <Text>{dayjs(CONFIG.TANGGAL_AKAD_NIKAH).format("dddd, DD MMMM YYYY")}</Text>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} fontSize={"1.25rem"} marginY={"1rem"}>
              <FaRegClock />
              <Text marginX={"0.5rem"}>{`${dayjs(CONFIG.TANGGAL_AKAD_NIKAH).format("HH:mm")} WIB - Selesai`}</Text>
            </Box>
            <Box hidden={!CONFIG.TAG_LOKASI_AKAD_NIKAH} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingX={"3rem"}>
              <FaSign />
              <Text marginX={"0.5rem"} fontWeight={"bold"}>
                {CONFIG.TAG_LOKASI_AKAD_NIKAH}
              </Text>
            </Box>
            <Text hidden={!CONFIG.LOKASI_AKAD_NIKAH}>{CONFIG.LOKASI_AKAD_NIKAH}</Text>
            <a href={CONFIG.LINK_MAPS_DIRECTION_ALAMAT_PERNIKAHAN_AKAD} target="_blank" rel="noopener noreferrer">
              <Button colorScheme="teal" variant="outline" marginY={"2rem"}>
                <Text>Lihat Lokasi</Text>
              </Button>
            </a>
          </>
          <Box display={"flex"} justifyContent={"center"} marginY={"1.5rem"}>
            <Image src={GARIS_BUNGA} />
          </Box>
          <>
            <Text fontFamily={"billy_signature_slant"} fontSize={"2.5rem"} marginBottom={"2rem"}>
              Resepsi
            </Text>
            <Text>{dayjs(CONFIG.TANGGAL_RESEPSI_NIKAH).format("dddd, DD MMMM YYYY")}</Text>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} fontSize={"1.25rem"} marginY={"1rem"}>
              <FaRegClock />
              <Text marginX={"0.5rem"}>{`${dayjs(CONFIG.TANGGAL_RESEPSI_NIKAH).format("HH:mm")} WIB - Selesai`}</Text>
            </Box>
            <Box hidden={!CONFIG.TAG_LOKASI_RESEPSI_NIKAH} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingX={"3rem"}>
              <FaSign />
              <Text marginX={"0.5rem"} fontWeight={"bold"}>
                {CONFIG.TAG_LOKASI_RESEPSI_NIKAH}
              </Text>
            </Box>
            <Text hidden={!CONFIG.LOKASI_RESEPSI_NIKAH}>{CONFIG.LOKASI_RESEPSI_NIKAH}</Text>
            <a href={CONFIG.LINK_MAPS_DIRECTION_ALAMAT_PERNIKAHAN_RESEPSI} target="_blank" rel="noopener noreferrer">
              <Button colorScheme="teal" variant="outline" marginY={"2rem"}>
                <Text>Lihat Lokasi</Text>
              </Button>
            </a>
          </>
          <Box display={"flex"} justifyContent={"center"} marginY={"1.5rem"}>
            <Image src={GARIS_BUNGA} />
          </Box>
        </Box>
      </Box>
      {/* map lokasi */}
      <Box padding={"1rem"}>
        <iframe
          src={CONFIG.LINK_MAPS_IFRAME_ALAMAT_PERNIKAHAN}
          width={"100%"}
          height={400}
          style={{ borderRadius: "1rem", border: "solid 2px #eee" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Text marginY={"1rem"}>{CONFIG.ALAMAT_PERNIKAHAN}</Text>
        <a href={CONFIG.LINK_MAPS_DIRECTION_ALAMAT_PERNIKAHAN} target="_blank" rel="noopener noreferrer">
          <Button colorScheme="teal" variant="outline" marginY={"1rem"}>
            <Text>Lihat Lokasi</Text>
          </Button>
        </a>
      </Box>
      {/* penutup */}
      <Box marginY={"2rem"}>
        <Text paddingX={"2rem"} textAlign={"center"}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
        </Text>
        <Box marginY={"1rem"}>
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            Turut Mengundang
          </Text>
          {CONFIG.TURUT_MENGUNDANG.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </Box>
      </Box>
      {/* footer */}
      <Box paddingY={["3rem", "7.5rem"]} backgroundImage={BACKGROUND_BUNGA4} backgroundSize={"contain"} backgroundPosition={"bottom"} backgroundRepeat={"no-repeat"}>
        <Box>
          <Text fontFamily={"billy_signature_slant"} fontSize={"1.5rem"}>
            Hormat kami
          </Text>
          <Text fontFamily={"billy_signature"} fontSize={"1.75rem"} marginTop={"1rem"} marginBottom={"3rem"}>
            {`${CONFIG.MEMPELAI_PRIA_PANGGILAN} & ${CONFIG.MEMPELAI_WANITA_PANGGILAN}`}
          </Text>
        </Box>
        <Box>
          <Button colorScheme="teal" marginY={"2rem"} onClick={onModalOpen}>
            Kirim Hadiah
          </Button>
        </Box>
      </Box>
      {/* modal kirim hadiah */}
      <Modal isOpen={isModalOpen} onClose={onModalClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Kirim Hadiah</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box marginY={"0.25rem"}>
              <Text fontWeight={"bold"}>Kirim Kado</Text>
              <Box border={"solid 2px #eee"} padding={"1rem"}>
                <Text>{`${CONFIG.MEMPELAI_PRIA} / ${CONFIG.MEMPELAI_WANITA}`}</Text>
                <Text>{`${CONFIG.ALAMAT_PERNIKAHAN}`}</Text>
              </Box>
            </Box>
            <Box marginY={"0.25rem"}>
              <Text fontWeight={"bold"}>Direct Transfer</Text>
              {CONFIG.TRANSFER_TUJUAN.map((item, index) => (
                <Box key={index} border={"solid 2px #eee"} padding={"1rem"} marginY={"0.5rem"}>
                  <Text fontWeight={"bold"}>{item.bank_name}</Text>
                  <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    <Text marginRight={"10px"}>{item.no_rek}</Text>
                    <CopyToClipboard text={"5050146890"}>
                      <MdOutlineContentCopy fontSize={"1.25rem"} />
                    </CopyToClipboard>
                  </Box>
                  <Text>{item.rek_name ? `a/n ${item.rek_name}` : false}</Text>
                </Box>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" variant={"outline"} mr={3} onClick={onModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Detail;
