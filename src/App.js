import Topbar  from "./Topbar/Topbar";
import Footer  from "./Footer/Footer";
import Home from "./Pages/Home";
import SinglePost from "./Pages/SinglePost";
import Write from "./Pages/Write";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";



import { BrowserRouter,Route } from "react-router-dom";
function App() {
const user=true;
  return (
    <div>
      <BrowserRouter>
        <Topbar/>
        <Route path="/singlepost/:id">{user ? <SinglePost/> : <Login/>}</Route>
        <Route path="/profile">{user ? <Profile/> : <Login/>}</Route>
        <Route path="/write">{user ? <Write/> : <Login/>}</Route>
        <Route path="/login" exact>{!user ? <Login/> : <Home/>}</Route>
        <Route path="/register" exact>{!user ? <Register/> : <Home/>}</Route>
        <Route path="/" exact>{user ? <Home/> : <Login/>}</Route>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
