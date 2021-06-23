import './Banner.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';
import{
  BannerTitleAndButton,
  LogoDADe
} from '../../components'


function Banner() {
  const [banner, SetBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get(`${config.url}/api/banner`);
    SetBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);


  return (
    <>
    {banner?.map(({image }) => (
      <div className="banner-view">
          <div className="middle-banner">
            <div className='banner'>
              <BannerTitleAndButton/>
              <div className='logo-banner'>
                <img src={image[0]?.url} alt="Logo DADe" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
    
  );
  }

export default Banner;