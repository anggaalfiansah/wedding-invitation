import { useState } from "react";
import dayjs from "dayjs";
import locale_id from "dayjs/locale/id";
import "./App.css";
import Detail from "./pages/Detail";
import Welcome from "./pages/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  dayjs.locale(locale_id);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>{isOpened ? <Detail /> : <Welcome setIsOpened={setIsOpened} />}</>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
