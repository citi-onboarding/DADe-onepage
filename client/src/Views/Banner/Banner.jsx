import './Banner.css';
import{
  BannerTitleAndButton,
  LogoDADe
} from '../../components'

function Banner() {

    return (
      <div className='banner'>
        <BannerTitleAndButton/>
        <LogoDADe/>
      </div>
    );
  }

export default Banner;