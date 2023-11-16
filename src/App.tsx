import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

import FirstPage from "./Views/FirstPage/FirstPage";
import SecondPage from "./Views/SecondPage/SecondPage";
import ThirdPage from "./Views/ThirdPage/ThirdPage";
import ForthPage from "./Views/ForthPage/ForthPage";
import FifthPage from "./Views/FifthPage/FifthPage";
import SixthPage from "./Views/SixthPage/SixthPage";
import SeventhPage from "./Views/SeventhPage/SeventhPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <FirstPage />
              <SecondPage />
              <ThirdPage />
              <ForthPage />
              <FifthPage />
              <SixthPage />
              <SeventhPage />
            </>
          }
        />
      </Route>
    </Routes>
  );
}
