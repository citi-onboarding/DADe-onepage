import './Footer.css';
import by_citi from './footer_by_citi.png'

function Footer() {

    return (
      <footer>
        <p>Copyright © 2021 DADe UFPE</p>
        <img src={by_citi} alt="Made with </> and s2 by CITi" />
      </footer>
    );
  }

export default Footer;