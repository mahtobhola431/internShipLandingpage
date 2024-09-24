// import React from 'react'
// import Navbar from './components/Navbar'
// import DropdownMenu from './components/DropdownMenu'
// import HeroBanner from './components/HeroBanner'
// import RecentlyReview from './components/RecentlyReview'
// import BrowseCategory from './components/BrowseCategory'


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
// <DropdownMenu/>
// <HeroBanner/>
// <RecentlyReview/>
// <BrowseCategory></BrowseCategory>

//     </div>
//   )
// }

// export default App


import React from 'react';
import Navbar from './components/Navbar';
import DropdownMenu from './components/DropdownMenu';
import HeroBanner from './components/HeroBanner';
import RecentlyReview from './components/RecentlyReview';
import BrowseCategory from './components/BrowseCategory';
import Deals from './components/Deals';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
        
      </div>
      <div className="mt-[120px]"> 
        <DropdownMenu />
        <HeroBanner />
        <RecentlyReview />
        <BrowseCategory />
        <Deals/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

