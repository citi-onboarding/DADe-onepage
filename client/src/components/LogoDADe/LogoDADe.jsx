import './LogoDADe.css';
import logo from './Logo_DADe.svg'

function LogoDADe(props) {
  
  return (
    <div className="logo">
        <img src={logo} alt="logo DADe" width={props.width}/>
    </div>
  );
}

export default LogoDADe;
