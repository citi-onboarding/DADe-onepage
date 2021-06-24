import './Acordion.css';
import config from '../../config/config';
import { Accordion } from '@material-ui/core';

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
        <section className="faq-section">
            <div className="faq-content">
                <div className="faq-questions-div">
                {questions?.map(({_id, pergunta, resposta}) => (
                    <div className="question-div">
                        <Accordion children={pergunta}/>
                    </div>
                        ))}
                </div>
            </div>
        </section>
    );
  }

export default Acordion;