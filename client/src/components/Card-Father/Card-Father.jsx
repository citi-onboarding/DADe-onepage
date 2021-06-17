import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card'; 

import './Card-Father.css';

import people from '../../Assets/people.svg';
import notion from '../../Assets/cib_notion.svg';
import document from '../../Assets/Icon_Document.svg';
import waves from '../../Assets/waves.svg';

function CardFather(props) {

  const [cards, setCards] = useState([]);

  const loadCards = async () => {
    const res = await axios.get('http://localhost:3001/api/organizacao-interna');
    setCards(res.data);
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <div className="card-father-div">
      {cards?.map(({_id, text, image}) => (
      <Card cardImage={image[0]?.url} cardText={text}/>
      ))}
    </div>
  );
}

export default CardFather;
