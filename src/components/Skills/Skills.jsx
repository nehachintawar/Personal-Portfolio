// import uniqid from 'uniqid'
// import { skills } from '../../portfolio'
// import './Skills.css'

// const Skills = () => {
//   if (!skills.length) return null

//   return (
//     <section className='section skills' id='skills'>
//       <h2 className='section__title'>Skills</h2>
//       <ul className='skills__list'>
//         {skills.map((skill) => (
//           <li key={uniqid()} className='skills__list-item btn btn--plain'>
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }

// export default Skills

import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container">
        {skills.map(({ category, items }) => (
          <div key={uniqid()} className="skills__group">
            <h3 className="skills__category">{category}</h3>
            <ul className="skills__list">
              {items.map((skill) => (
                <li key={uniqid()} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
