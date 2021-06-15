import './Button.css';

function Button(props) {
  
  return (
    <div className={props.className}>
        <h3>{props.text}</h3>
    </div>
  );
}

export default Button;
