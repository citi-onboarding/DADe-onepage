import './Acordion.css';
import config from '../../config/config';
import { Accordion } from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useState, useEffect } from 'react';
import axios from 'axios';


function Acordion() {

    const [questions, setQuestions] = useState([]);

    const loadQuestions = async () => {
        const res = await axios.get(`${config.url}/api/FAQ`);
        setQuestions(res.data);
    };

    useEffect(() => {
        loadQuestions();
    }, []);

    return (

        <div className="acordeon-div">
        {questions?.map(({_id, pergunta, resposta}) => (
            <div className="question-div">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                        <Typography >{pergunta}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> {resposta}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
                ))}
        </div>
    );
  }

export default Acordion;