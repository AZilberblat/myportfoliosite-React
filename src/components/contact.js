import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Abraham Zilberblat</h2>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQFEkNhZG5B9dg/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=4lnYhwpr0IVKJG-DpC4Mkh_UZ97vyOuwhxMNCy0fBNM"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello everyone my name is Abraham and im 3rd year software engineering student, i served in the army as a software developer. i love video games and apple pies </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    050-2421992
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    03-6485845
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    avizilberblat@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    Avraham Zilberblat
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
//       <React.Fragment>
//     {/*generated code*/}
//     <section id="contact">
// <div className="row section-head">
//   <div className="two columns header-col">
//     <h1><span>Get In Touch.</span></h1>
//   </div>
//   <div className="ten columns">
//     <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
//       eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
//       voluptatem quia voluptas sit aspernatur aut odit aut fugit.
//     </p>
//   </div>
// </div>
// <div className="row">
//   <div className="eight columns">
//     {/* form */}
//     <form action method="post" id="contactForm" name="contactForm">
//       <fieldset>
//         <div>
//           <label htmlFor="contactName">Name <span className="required">*</span></label>
//           <input type="text" defaultValue size={35} id="contactName" name="contactName" />
//         </div>
//         <div>
//           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
//           <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
//         </div>
//         <div>
//           <label htmlFor="contactSubject">Subject</label>
//           <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
//         </div>
//         <div>
//           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
//           <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
//         </div>
//         <div>
//           <button className="submit">Submit</button>
//           <span id="image-loader">
//             <img alt="" src="images/loader.gif" />
//           </span>
//         </div>
//       </fieldset>
//     </form> {/* Form End */}
//     {/* contact-warning */}
//     <div id="message-warning"> Error boy</div>
//     {/* contact-success */}
//     <div id="message-success">
//       <i className="fa fa-check" />Your message was sent, thank you!<br />
//     </div>
//   </div>
//   <aside className="four columns footer-widgets">
//     <div className="widget widget_contact">
//       <h4>Address and Phone</h4>
//       <p className="address">
//         Jonathan Doe<br />
//         1600 Amphitheatre Parkway <br />
//         Mountain View, CA 94043 US<br />
//         <span>(123) 456-7890</span>
//       </p>
//     </div>
//     <div className="widget widget_tweets">
//       <h4 className="widget-title">Latest Tweets</h4>
//       <ul id="twitter">
//         <li>
//           <span>
//             This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
//             Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
//             <a href="#">http://t.co/CGIrdxIlI3</a>
//           </span>
//           <b><a href="#">2 Days Ago</a></b>
//         </li>
//         <li>
//           <span>
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
//             eaque ipsa quae ab illo inventore veritatis et quasi
//             <a href="#">http://t.co/CGIrdxIlI3</a>
//           </span>
//           <b><a href="#">3 Days Ago</a></b>
//         </li>
//       </ul>
//     </div>
//   </aside>
// </div>
// </section> {/* Contact Section End*/}
//
//     <header id="home">
//       ....
//     </header>
//     </React.Fragment>
    )
  }
}
export default Contact;
