import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { home } from '../../portfolio';
import './Home.css';

const Home = () => {
  const { name, role, resume, social } = home;

  return (
    <div id="home" className="home">
      <div className="home-container">
        <div className="home__intro">
          <div className="home__intro">
            {name && (
              <h1>
                Hi, I am <span className="home__name">{name}.</span>
              </h1>
            )}
            {role && <h2 className="home__role"> {role}.</h2>}
          </div>
        </div>

        <div className="home__contact center">
          <div
            style={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            {resume && (
              <a href={resume}>
                <button type="button" className="btn--outline">
                  Resume
                </button>
              </a>
            )}

            <a href="#contact">
              <button type="button" className="btn">
                Hire Me
              </button>
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label="github"
                    className="link link--icon"
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label="linkedin"
                    className="link link--icon"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
