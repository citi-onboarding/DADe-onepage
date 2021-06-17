import {
    Title,
    SmallText,
    ContactLine,
  } from '../../components';
  
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  
  import Instagram from '../../Assets/InstaIcon.svg';
  import Twitter from '../../Assets/TwitterIcon.svg';
  import Mail from '../../Assets/MailIcon.svg';
  import Telegram from '../../Assets/TelegramIcon.svg';
  import Whatsapp from '../../Assets/ZapIcon.svg';
  
  import './Contact.css';
  
  function Contact(props) {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
      const res = await axios.get('http://localhost:3001/api/contatos');
      setContacts(res.data);
    };

    useEffect(() => {
      loadContacts();
    }, []);
  
      return (
        <section className='contact'>
          <div className='contact-info'>
            <div className='contact-paragraph'>
              <div className='title-div'>
              <Title titleText='ENTRE EM CONTATO'/>
              </div>
              <div className='small-text-div'>
              <SmallText pSmallText='Acompanhe nossas redes sociais e fique por dentro do que estamos preparando' lineHeight='25px' />
              </div>
            </div>
            {contacts?.map(({_id, whatsapp, telegram, email, twitter, instagram}) => (
            <div className='line-group-div'>
                <ContactLine lineImg={Instagram} contactInfo='dadeupe' contactLink ={instagram}/>
                <ContactLine lineImg={Twitter} contactInfo='DADeUFPE' contactLink ={twitter}/>
                <ContactLine lineImg={Mail} contactInfo='dadeufpe@gmail.com' contactLink ={email}/>
                <ContactLine lineImg={Telegram} contactInfo='Telegram' contactLink ={telegram}/>
                <ContactLine lineImg={Whatsapp} contactInfo='Whatsapp' contactLink ={whatsapp}/>
            </div>
            ))}
          </div>
          <div className='forms'>
            <form action="">
            </form>
          </div>
        </section>
      );
    }
  
  export default Contact;