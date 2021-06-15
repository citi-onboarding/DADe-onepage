import './Navbar.css';
import{
  SectionNavbar,
  LogoDADe,
  Button,
} from '../../components'

function Navbar() {

    return (
      <header>
          <div className="logo-nav">
            <LogoDADe width='98px'/>
          </div>
          <SectionNavbar text='O que é o D.A.?' id=''/>
          <SectionNavbar text='Como trabalhamos' id=''/>
          <SectionNavbar text='Realizações ' id=''/>
          <SectionNavbar text='Membros' id=''/>
          <SectionNavbar text='Contato' id=''/>
          <SectionNavbar text='FAQ' id=''/>
          <Button text='PARTICIPAR' className="participate-button" width='11.8vw'/>
      </header>
    );
  }

export default Navbar;