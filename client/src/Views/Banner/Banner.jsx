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
        <div className='logo'>
          <LogoDADe logo={logo}/>
        </div>
      </div>
    );
  }

export default Banner;