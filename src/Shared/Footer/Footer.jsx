import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerImg from '../../assets/image/vendor-logo.png'
const Footer = () => {
  return (
    <footer className="footer bg-base-200  p-10">
      <aside>
        <img className='h-20 w-20' src={footerImg} alt="" />
        <p>
          Healthcare
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href='https://x.com/?lang=en'>
            <FaTwitter size={25}/>
          </a>
          <a href='https://www.youtube.com/'>
           <FaYoutube size={25}/>
          </a>
          <a href='https://www.facebook.com/'>
            <FaFacebook size={25}/>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
