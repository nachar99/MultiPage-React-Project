import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/Navigation";
import AboutMePage from "./pages/AboutmePage";
import Links from "./components/Links";
import ProgressPage from "./pages/ProgressPage";
import ProgressConceptPage from "./pages/ProgressConceptPage";
import BackButton from "./components/BackButton";

function App() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <nav className="w-full h-15 bg-[#006d77]  rounded-md flex justify-center">
          <Navigation />
        </nav>

        <div className="flex flex-col gap-5 w-250 h-auto rounded-md bg-[#83c5be] p-4 justify-center">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="/about" element={<AboutMePage />}></Route>
            <Route path="/progress" element={<ProgressPage />}></Route>
            <Route
              path="/progress/:id"
              element={<ProgressConceptPage />}
            ></Route>
          </Routes>
          <div className="justify-center">
            <BackButton />
          </div>
        </div>
        <footer className="w-full h-15 bg-[#006d77] rounded-md flex justify-center">
          <Links />
        </footer>
      </div>
    </>
  );
}

export default App;
