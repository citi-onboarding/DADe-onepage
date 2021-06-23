import {
  Paragraph,
  FooterNotion,
  CardFather
} from '../../components';

import './Organization.css';

function Organization(props) {

    return (
      <section className='organization'>
        <div className='organization-content'>
        <Paragraph/>
        <CardFather/>
        </div>
        <FooterNotion footerTitle="Confira no que o D.A. está trabalhando no momento"/>
      </section>
    );
  }

export default Organization;