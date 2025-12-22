import { about } from '../../portfolio';
//import neha_img from 'public/image/neha_img.png'
import './About.css';

const About = () => {
  const { description, picture } = about;

  return (
    <div id="about" className="about center">
      <div className="about__header">
        {picture && (
          <img
            src={`${import.meta.env.BASE_URL}image/nehaImg.jpeg`}
            alt="Neha"
            className="about__picture"
          />
        )}
        <p className="about__desc">{description && description}</p>
      </div>
    </div>
  );
};

export default About;
