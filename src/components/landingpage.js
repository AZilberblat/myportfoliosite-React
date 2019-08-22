import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%' , margin: 'auto'}}>
       <Grid className="landing-grid">
       <Cell col={12}>
        <img
         src="https://cdn3.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
         alt="avatar"
         className="avatar-img"
         />
         <div className="banner-text">
         <h1>Software Engineer</h1>
         <hr/>
         <p>JAVA | HTML/CSS | Python | Blockchain | Unity | Android | C/C++ | NodeJS</p>
         <div className="social-links">

         <a href="https://www.linkedin.com/in/abraham-zilberblat-2a2b78185/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a href="https://github.com/AZilberblat" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-github-square" aria-hidden="true" />
           </a>

           <a href="https://www.instagram.com/a.zilberblat/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>

            <a href="https://www.facebook.com/avraham.zilberblat" rel="noopener noreferrer" target="_blank">
               <i className="fa fa-facebook" aria-hidden="true" />
             </a>

         </div>

         </div>

       </Cell>

       </Grid>

      </div>
    )
  }
}

export default Landing;
