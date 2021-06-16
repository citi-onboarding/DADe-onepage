import {
  Navbar,
  Banner,
  Organization,
  OurMembers,
  Footer,
} from './Views';

import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>

      <Organization />
      <OurMembers/>
      <Footer/>
    </>

  );
}

export default App;
