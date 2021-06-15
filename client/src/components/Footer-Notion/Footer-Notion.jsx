import { useState, useEffect } from 'react';
import axios from 'axios';

import './Footer-Notion.css';

import Button from '../Button';

function Footer(props) {

  return (
    <div className="footer-div">
      <h1>{props.footerTitle}</h1>
      <Button link="https://www.notion.so/" text="Acesse nosso Notion" className="Notion-Buttom"/>
    </div>
  );
}

export default Footer;
