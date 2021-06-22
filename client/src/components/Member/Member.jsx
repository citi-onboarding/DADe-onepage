import './Member.css';

function Member(props) {

  return (
    <div className="member-content">
      <img src={props.image} alt="Foto membro" />
      <h4>{props.name}</h4>
      <p>{props.cargo}/{props.data_inicial}</p>
    </div>
  );
}

export default Member;
