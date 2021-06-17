import {
    Title,
    SmallText,
    ContactLine,
  } from '../../components';
  
  import { useState, useEffect } from 'react';
  
  import Instagram from '../../Assets/InstaIcon.svg';
  import Twitter from '../../Assets/TwitterIcon.svg';
  import Mail from '../../Assets/MailIcon.svg';
  import Telegram from '../../Assets/TelegramIcon.svg';
  import Whatsapp from '../../Assets/ZapIcon.svg';
  
  import './Contact.css';
  
  function Contact(props) {
  
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
            <div className='line-group-div'>
              <ContactLine lineImg={Instagram} contactInfo='dadeupe' contactLink ='https://ge.globo.com/pe/futebol/times/nautico/'/>
              <ContactLine lineImg={Twitter} contactInfo='DADeUFPE' contactLink ='https://ge.globo.com/pe/futebol/times/nautico/'/>
              <ContactLine lineImg={Mail} contactInfo='dadeufpe@gmail.com' contactLink ='https://ge.globo.com/pe/futebol/times/nautico/'/>
              <ContactLine lineImg={Telegram} contactInfo='Telegram' contactLink ='https://ge.globo.com/pe/futebol/times/nautico/'/>
              <ContactLine lineImg={Whatsapp} contactInfo='Whatsapp' contactLink ='https://ge.globo.com/pe/futebol/times/nautico/'/>
            </div>
          </div>
          <div className='forms'>
            <form action="">
            </form>
          </div>
        </section>
      );
    }
  
  export default Contact;