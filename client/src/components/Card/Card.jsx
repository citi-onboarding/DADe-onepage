import './Card.css';

function Card(props) {

  return (
    <div className="card-div">
      <div className="card-img-div">
      <img src={props.cardImage} alt="Imagem do Card" />
      </div>
      <div className='card-text-div'>
      <p>{props.cardText}</p>
      </div>
    </div>
  );
}

export default Card;
