import './LogoDADe.css';

function LogoDADe(props) {
  
  return (
    <div className="logo">
        <img src={props.logo} alt="logo DADe" width={props.width}/>
    </div>
  );
}

export default LogoDADe;
