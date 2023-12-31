import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import ImageList from "./Components/ImageCard/ImageList";
import Header from "./Components/Navbar/Navbar";
import Animal from "./Components/Pages/Animal/Animal";
import Nature from "./Components/Pages/Nature/Nature";
import People from "./Components/Pages/People/People";
import Search from "./Components/Search/Search";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Hero} />
        <Route path="/" exact component={ImageList} />
        <Route path="/animals" exact component={Animal} />
        <Route path="/people" exact component={People} />
        <Route path="/nature" exact component={Nature} />
        <Route path="/search" exact component={Search} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </>
  );
}

export default App;
