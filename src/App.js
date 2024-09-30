import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu";
import HeroBanner from "./components/HeroBanner";
import RecentlyReview from "./components/RecentlyReview";
import BrowseCategory from "./components/BrowseCategory";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blogs from "./pages/Blogs";
import TopDeals from "./pages/TopDeals";

const App = () => {
  return (
    <Router>
      <div>
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
          <DropdownMenu />
        </div>
        <div className="mt-[120px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroBanner />
                  <RecentlyReview />
                  <BrowseCategory />
                  <Deals />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/topdeals" element={<TopDeals/>}/>
       </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};



export default App;
