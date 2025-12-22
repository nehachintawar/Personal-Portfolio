import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className="project">
    {project?.image && (
      <img
        src={
          project.image.startsWith('http')
            ? project.image
            : `/images/${project.image}` // fixed for Vite
        }
        alt={`${project.name} screenshot`}
        style={{ width: '100%', objectFit: 'cover' }}
      />
    )}

    <h3>{project?.name}</h3>

    {project?.tagline && <p className="project__tagline">{project.tagline}</p>}

    <p className="project__description">{project?.description}</p>

    {/* {project?.highlights && (
      <ul className='project__highlights'>
        {project.highlights.map((highlight, index) => (
          <li key={index} className='project__highlight-item'>
            {highlight}
          </li>
        ))}
      </ul>
    )} */}

    {project?.stack && (
      <ul className="project__stack">
        {project.stack.map((item, index) => (
          <li key={index} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project?.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {project?.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;
