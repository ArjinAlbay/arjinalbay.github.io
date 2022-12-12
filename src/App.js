import { Routes, Route, Link } from "react-router-dom";
import MenuSection from "./component/MenuSection";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import CV from "./pages/Cv";
function App() {
  return (
    <>
      <Link to="/">{HomePage} </Link>
      <Link to="/projects">projects </Link>
      <Link to="/articles">articles </Link>
      <Link to="/cv">cv </Link>
      <div className=" flex flex-row h-screen gap-16">
        <MenuSection />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/cv" element={<CV />}></Route>
      </Routes>
    </>
  );
}

export default App;
