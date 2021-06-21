import './Navbar.css';
import{
  SectionNavbar,
  LogoDADe,
  Button,
} from '../../components'

import { useState, useEffect } from 'react';
import axios from 'axios';

import hamb from '../../Assets/menu_hamb.svg'
import close from '../../Assets/fechar_menu.svg'

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
              <LogoDADe width='180px' height='40px'logo={image[0]?.url}/>
            </div>
            <SectionNavbar text='O que é o D.A.?' id=''/>
            <SectionNavbar text='Como trabalhamos' id=''/>
            <SectionNavbar text='Realizações ' id=''/>
            <SectionNavbar text='Membros' id='#members'/>
            <SectionNavbar text='Contato' id='#contact'/>
            <SectionNavbar text='FAQ' id=''/>
            <Button text='PARTICIPAR' className="participate-button" width='11.8vw' link={link_paticipate}/>
            <div className="menu-hamburguer">
              <a><img src={hamb} alt="Abrir menu" class="show-open"/></a>
              <a><img src={close} alt="Fechar menu"/></a>
            </div>
          </nav>
      ))}
      </header>
    );
  }

export default Navbar;