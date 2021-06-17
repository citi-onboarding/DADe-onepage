import './Banner.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import{
  BannerTitleAndButton,
  LogoDADe
} from '../../components'


function Banner() {
  const [banner, SetBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    SetBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);


  return (
    <>
    {banner?.map(({image }) => (
      <div className='banner'>
        <BannerTitleAndButton/>
        <div className='logo-banner'>
          <img src={image[0]?.url} alt="Logo DADe" />
        </div>
      </div>
      ))}
    </>
    
  );
  }

export default Banner;