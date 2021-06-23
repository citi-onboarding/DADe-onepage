import './SectionNavbar.css';

function SectionNavbar(props) {
  
  return (
    <a href={props.id}>{props.text}</a>
  );
}

export default SectionNavbar;
