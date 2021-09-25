import Topbar  from "./Topbar/Topbar";
import Footer  from "./Footer/Footer";
import Home from "./Pages/Home";
import SinglePost from "./Pages/SinglePost";
import Write from "./Pages/Write";

import { BrowserRouter,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar/>
        <Route path="/singlepost"><SinglePost/></Route>
        <Route path="/write"><Write/></Route>
        <Route path="/" exact><Home/></Route>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
