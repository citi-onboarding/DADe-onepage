import './Banner.css';
import{
  BannerTitleAndButton,
  LogoDADe
} from '../../components'

import logo from '../../components/LogoDADe/Logo_DADe.svg'

function Banner() {

    return (
      <div className='banner'>
        <BannerTitleAndButton/>
        <LogoDADe logo={logo}/>
      </div>
    );
  }

export default Banner;