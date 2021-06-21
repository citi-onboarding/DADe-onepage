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

  const [link_paticipate, SetLinkParticipate] = useState([]);

  const loadLinkParticipate = async () => {
    const res_ = await axios.get('http://localhost:3001/api/banner');
    SetLinkParticipate(res_.data[0].link_botao_participe);
  };

  useEffect(() => {
    loadLogo();
    loadLinkParticipate();
  }, []);


    return (
      <header>
        {logo?.map(({image}) => (
          <nav>
            <div className="logo-nav">
              <LogoDADe width='98px' height='87px'logo={image[0]?.url}/>
            </div>
            <SectionNavbar text='O que é o D.A.?' id=''/>
            <SectionNavbar text='Como trabalhamos' id=''/>
            <SectionNavbar text='Realizações ' id=''/>
            <SectionNavbar text='Membros' id='#members'/>
            <SectionNavbar text='Contato' id='#contact'/>
            <SectionNavbar text='FAQ' id=''/>
            <Button text='Quero participar!' className="participate-button" width='11.8vw' link={link_paticipate}/>
          </nav>
      ))}
      </header>
    );
  }

export default Navbar;