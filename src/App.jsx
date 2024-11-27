import "./App.css";
import BookDisplay from "./components/BookDisplay";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAccount from "./components/MyAccount";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BookDisplay />
              <Categories />
            </>
          }
        />

        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
