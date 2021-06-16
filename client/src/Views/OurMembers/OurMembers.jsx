import './OurMembers.css';
import{
  Member,
  Title,
} from '../../components'

import tavora from '../../Assets/photo_tavora.svg'

function OurMembers() {

    return (
      <section className='members-section'>
        <div className="members-content">
          <div className="title-text">
            <Title titleText='NOSSO MEMBROS' textColor='#FFFFFF'/>
          </div>
          <div className="all-members">
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
            <Member image={tavora} name='Lucas Távora' cargo='Comunicação' data_inicial='2021'/>
          </div>
        </div>
      </section>
    );
  }

export default OurMembers;