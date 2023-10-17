import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import ImageList from "./Components/ImageCard/ImageList";
import Header from "./Components/Navbar/Navbar";
import Animal from "./Components/Pages/Animal/Animal";
import Nature from "./Components/Pages/Nature/Nature";
import People from "./Components/Pages/People/People";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Hero} />
        <Route path="/animals" exact component={Animal} />
        <Route path="/people" exact component={People} />
        <Route path='/nature' exact component={Nature}/>
      </BrowserRouter>
    </>
  );
}

export default App;
