import { useState, useEffect } from 'react';
import axios from 'axios';

import './SmallText.css';

function SmallText(props) {

  return (
    <div className="small-text-div">
      <p style={{lineHeight: props.lineHeight}}>{props.pSmallText}</p>
    </div>
  );
}

export default SmallText;
