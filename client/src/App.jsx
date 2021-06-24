import {
  Navbar,
  Banner,
  Organization,
  OurMembers,
  Footer,
  Contact,
  HowWeWork
} from './Views';

import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <HowWeWork/>
      <Organization />
      <OurMembers/>
      <Contact/>
      <Footer/>
      
    </>

  );
}

export default App;
