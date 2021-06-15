import { useState, useEffect } from 'react';
import axios from 'axios';

import './Text.css';

function Text(props) {

  return (
    <div className="text-div">
      <p>{props.pText}</p>
    </div>
  );
}

export default Text;
