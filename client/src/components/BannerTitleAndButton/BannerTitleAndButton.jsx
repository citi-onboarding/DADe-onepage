import './BannerTitleAndButton.css';
import BannerTitle from '../BannerTitle'
import Button from '../Button'

function BannerTitleAndButton() {
  
  return (
    <div className="banner-title-and-button">
        <BannerTitle purple='Faça parte do diretório acadêmico' yellow='de Design da UFPE'/>
        <Button text='PARTICIPAR' className="participate-button"/>
    </div>
  );
}

export default BannerTitleAndButton;
