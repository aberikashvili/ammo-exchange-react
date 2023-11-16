import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import WhyAmmoView from "./views/WhyAmmoView";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/whyammo" element={<WhyAmmoView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
