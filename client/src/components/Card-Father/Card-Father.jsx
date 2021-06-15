import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card'; 

import './Card-Father.css';

import people from '../../Assets/people.svg';
import notion from '../../Assets/cib_notion.svg';
import document from '../../Assets/Icon_Document.svg';
import waves from '../../Assets/waves.svg';





function CardFather(props) {

  return (
    <div className="card-father-div">
      <Card cardImage={people} cardText="Todos participam da Reunião Geral - Terças 18h"/>
      <Card cardImage={waves} cardText="Comunicação interna em primeiro lugar! Se alguém acha que não consegue fazer alguma demanda, tudo bem! Só avisar que a gente se reorganiza."/>
      <Card cardImage={document} cardText="Todos tentam ficar por dentro do que está rolando. toda reunião interna ou externa, fazemos ATA."/>
      <Card cardImage={notion} cardText="Acompanhar o notion e atualizar o Notion sempre é essencial para que todos estejam à par das atividades que estão sendo executadas."/>
    </div>
  );
}

export default CardFather;
