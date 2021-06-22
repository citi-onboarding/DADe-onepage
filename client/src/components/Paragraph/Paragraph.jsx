import { useState, useEffect } from 'react';
import axios from 'axios';

import './Paragraph.css';
import Title from '../Title';
import Text from '../Text';



function Paragraph(props) {

  return (
    <div className="paragraph-div">
      <Title titleText="ORGANIZAÇÃO INTERNA"/>
      <div className="paragraph-text">
        <Text pText="Trabalhamos horizontalmente, nos dividindo entre Comunicação (redes sociais e canais de comunicação - fazer os textos e arte dos posts, responder inbox, etc) e Executiva (participar das reuniões com externos - colegiado, reitoria e pró-reitorias, DCE e DAs da federal, etc). "/>
        <Text pText="Qualquer membro disponível pode participar das comissões e exercer funções que não necessariamente são da sua área no D.A., e essas comissões podem ter alunos que não são membros do D.A. envolvidos."/>
      </div>    
    </div>
  );
}

export default Paragraph;
