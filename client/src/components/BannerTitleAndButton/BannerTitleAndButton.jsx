import './BannerTitleAndButton.css';
import BannerTitle from '../BannerTitle'
import Button from '../Button'

import { useState, useEffect } from 'react';
import axios from 'axios';

function BannerTitleAndButton() {

  const [bannerTitleAndButton, SetBannerTitleAndButton] = useState([]);

  const loadBannerTitleAndButton = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    SetBannerTitleAndButton(res.data);
  };

  useEffect(() => {
    loadBannerTitleAndButton();
  }, []);

  return (
    <>
    {bannerTitleAndButton?.map(({texto_roxo, texto_amarelo, link_botao_participe}) => (
      <div className="banner-title-and-button">
        <BannerTitle purple={texto_roxo} yellow={texto_amarelo}/>
        <Button text='PARTICIPAR' className="participate-button" link={link_botao_participe}/>
      </div>
    ))}
    
    </>
  );
}

export default BannerTitleAndButton;
