import './Button.css';

function Button(props) {
  
  return (
    <a href={props.link} className={props.className}>
        <p>{props.text}</p>
    </a>
  );
}

export default Button;
