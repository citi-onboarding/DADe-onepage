import './Navbar.css';
import{
  SectionNavbar,
  LogoDADe,
  Button,
} from '../../components'

import { useState, useEffect } from 'react';
import axios from 'axios';


function Navbar() {
  const [logo, SetLogo] = useState([]);

  const loadLogo = async () => {
    const res = await axios.get('http://localhost:3001/api/logo');
    SetLogo(res.data);
  };

  useEffect(() => {
    loadLogo();
  }, []);

    return (
      <header>
        {logo?.map(({image, link_botao_participe}) => (
          <nav>
            <div className="logo-nav">
              <LogoDADe width='98px' logo={image[0].url}/>
            </div>
            <SectionNavbar text='O que é o D.A.?' id=''/>
            <SectionNavbar text='Como trabalhamos' id=''/>
            <SectionNavbar text='Realizações ' id=''/>
            <SectionNavbar text='Membros' id=''/>
            <SectionNavbar text='Contato' id=''/>
            <SectionNavbar text='FAQ' id=''/>
            <Button text='PARTICIPAR' className="participate-button" width='11.8vw' link={link_botao_participe}/>
          </nav>
      ))}
      </header>
    );
  }

export default Navbar;