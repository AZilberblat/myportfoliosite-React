import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQFEkNhZG5B9dg/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=4lnYhwpr0IVKJG-DpC4Mkh_UZ97vyOuwhxMNCy0fBNM"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Abraham Zilberblat</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Highly versatile and driven person with a "team player" spirit.
Great passion for technology and gadgets.
Looking forward for the next challenge in my future career
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Aria Disenchick 4, Tel aviv</p>
            <h5>Phone</h5>
            <p>050-2421992</p>
            <h5>Email</h5>
            <p>avizilberblat@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
                    startYear={2016}
                    endYear={2020}
                    schoolName="Afeka college of engineering"
                    schoolDescription="B.Sc. Degree in Software Engineering with specialization in software and information technologies "
                     />
                     <Education
                     startYear={2012}
                     endYear={2014}
                     schoolName="IDF"
                     schoolDescription="Served in ministry of defence and C4I corps, as a software developer and 'Mamram' course graduate"
                     />
                     <Education
                     startYear={2008}
                     endYear={2011}
                     schoolName="Amal lady davis high school"
                     schoolDescription="High School Diploma -  Computer science, math and physics – extended 5 points each"
                     />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
              <Experience
              startYear={2012}
              endYear={2014}
              jobName="Software developer"
              jobDescription=  <p>
<h5><b>Simulation software developer</b></h5><br/>
•	Worked with embedded systems development<br/>
•	Worked with Graphical engines<br/>
•	Experience with architectural systems design.<br/>
•	C++, Data security, courses graduate at "Mamram"<br/>
•	VrForces, VegaPrime, Matlab courses graduate <br/>
•	Frequent working relationship with various companies in the industry including "Elbit", "Rafael", "Bagira" etc….<br/>

<h5><b>QA team leader</b></h5><br/>
•	Integrator Quality assurance into development progress in large scale systems<br/>
•	Developing automation tests<br/>
•	QA courses graduate at "Mamram"<br/>

          </p>
              />
          
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java    "
                progress={90}
                />
                <Skills
                  skill="Android "
                  progress={80}
                  />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Unity   "
                    progress={80}
                    />
                    <Skills
                    skill="NodeJS  "
                    progress={50}
                    />
                    <Skills
                      skill="React   "
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
