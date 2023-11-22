import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HowItWorksView from "./Views/HowItWorksView";
import FAQsView from "./Views/FAQsView";




function App() {


  return (
    <>
        <Routes>
          <Route element={<Layout />}> 
            <Route  path="/HowItWorks" element={<HowItWorksView />}/>
            <Route  path="/FAQsView" element={<FAQsView />}/>
          </Route>
        </Routes>

    </>
  )
}

export default App;
