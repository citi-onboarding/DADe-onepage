import './OurMembers.css';
import{
  Member,
  Title,
} from '../../components'

import { useState, useEffect } from 'react';
import axios from 'axios';

function OurMembers() {

  const [members, SetMembers] = useState([]);

  const loadMembers = async () => {
    const res = await axios.get('http://localhost:3001/api/members');
    console.log(res.data)
    SetMembers(res.data);
  };

  useEffect(() => {
    loadMembers();
  }, []);

    return (
      <section className='members-section' id="members">
        <div className="members-content">
          <div className="title-text">
            <Title titleText='NOSSO MEMBROS' textColor='#FFFFFF'/>
          </div>
          <div className="all-members">
          {members?.map(({cargo, data_inicial, image, name}) => (
            <Member image={image[0]?.url} name={name} cargo={cargo} data_inicial={data_inicial}/>
          ))}
          </div>
        </div>
        
      </section>
    );
  }

export default OurMembers;