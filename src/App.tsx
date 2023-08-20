import { useEffect, useState } from "react";
import { ChakraProvider, useBoolean } from "@chakra-ui/react";
import { CONFIG } from "./utils/config";
import Detail from "./views/Detail";
import Welcome from "./views/Welcome";

// dayJS
import dayjs from "dayjs";
import locale_id from "dayjs/locale/id";

// load font
import "./font.css";

const App = () => {
  const [isOpen, setIsOpen] = useBoolean(false);
  const [guest, setGuest] = useState<string>();

  dayjs.locale(locale_id);

  useEffect(() => {
    // auto set title
    document.title = `Undangan Pernikahan ${CONFIG.MEMPELAI_PRIA_PANGGILAN} & ${CONFIG.MEMPELAI_WANITA_PANGGILAN}`;
    // get guest name from params
    const params = new URLSearchParams(window.location.search);
    const guestParams = params.get("guest");
    if (guestParams) {
      setGuest(guestParams);
    }
  }, []);

  return <ChakraProvider>{isOpen ? <Detail /> : <Welcome toggle={setIsOpen.toggle} guest={guest} />}</ChakraProvider>;
};

export default App;
