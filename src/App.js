// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Projectdata from './Components/Projectcards/Projectdata';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element= {<Home />} />
//         <Route path='/about' element= {<About />} />
//         <Route path="/project/:id" element={<Projectdata />} />
//         <Route path="/test" element={<div>Testing Route Works</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ProjectDetails from './Components/Projectcards/Projectcards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/test" element={<div>Testing Route Works</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




