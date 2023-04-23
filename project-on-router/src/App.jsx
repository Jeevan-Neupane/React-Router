import {
  createBrowserRouter,
  Route,



  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import RootLayOut from "./Layouts/RootLayOut";
import HelpLayout from "./Layouts/HelpLayout";
import Faq from "./Pages/Help/faq";
import Contact from "./Pages/Help/contact";
import NotFound from "./Pages/NotFound";
import CareerLayout from "./Layouts/CareerLayout";
import Career from "./Pages/Career/Career";
import careerLoaders, { careerDetails } from "./Fetch Api/fetchJob";
import CareerDetail from "./Pages/Career/CareerDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayOut/>} path="/">
        <Route path="*" element={<NotFound/>}></Route>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}/>
          
        </Route>
        <Route path="careers" element={<CareerLayout/>}>
          <Route index element={<Career/>} loader={careerLoaders}/>
          <Route path=":id" element={<CareerDetail/>} loader={careerDetails}/>
          
        </Route>

     
      </Route>
    )
  );

  return (
   
    <RouterProvider router={router}/>

    

  );
}

export default App;
