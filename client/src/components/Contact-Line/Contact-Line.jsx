import SmallText from '../SmallText';

import './Contact-Line.css';

function ContactLine(props) {

  return (
    <div className="line-content">
        <div className="line-img-div">
        <img src={props.lineImg} alt="Imagem de Rede Social" />
        </div>
        <div className="line-text-div">
        <a href={props.contactLink} target='_blank'><SmallText lineHeight='24px' pSmallText={props.contactInfo}/></a>
        </div>
    </div>
  );
}

export default ContactLine;
