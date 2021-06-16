import {
  PostList,
  Card,
  Paragraph,
  FooterNotion,
  CardFather
} from '../../components';

import { useState, useEffect } from 'react';



import './Organization.css';

function Organization(props) {

    return (
      <section className='organization'>
        <Paragraph/>
        <CardFather/>
        <FooterNotion footerTitle="Confira no que o D.A. está trabalhando no momento"/>
      </section>
    );
  }

export default Organization;