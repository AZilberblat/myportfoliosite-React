import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

 toggleCategories() {

   if(this.state.activeTab ==0){
     return (
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://spring.io/img/homepage/icon-spring-framework.svg) center / cover'}} >Java Project #1</CardTitle>
            <CardText>
              Java playgroud using spring framework,mongoDB,JavaFX
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>PDF</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
     )
   }
   else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/*BattleShips*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://dunked.cdn.speedyrails.net/assets/prod/22884/p17s2tfgc31jte13d51pea1l2oblr3.png) center / cover'}} >BattleShips</CardTitle>
             <CardText>
               BattleShips game with computer AI developed on Android studio
             </CardText>
             <CardActions border>
             <a href="https://github.com/AZilberblat/BattleShipFinal" rel="noopener noreferrer" target="_blank">
               <Button colored>GitHub</Button>
               </a>
               <Button colored>PDF</Button>
               <Button colored>Live Demo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
               <IconButton name="share" />
             </CardMenu>
           </Card>

           {/*family locator*/}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://dunked.cdn.speedyrails.net/assets/prod/22884/p17s2tfgc31jte13d51pea1l2oblr3.png) center / cover'}} >Family locator</CardTitle>
                <CardText>
                  Family locator app with firebase and google services developed on Android studio
                </CardText>
                <CardActions border>
                <a href="https://github.com/AZilberblat/Family-Locator" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                  </a>
                  <Button colored>PDF</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/*Blockchain network*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/897/0*QnRkpn9cqWJECc_n) center / cover'}} >Blockchain</CardTitle>
             <CardText>
               Deploying my very first block chain network
             </CardText>
             <CardActions border>
              <a href="https://github.com/AZilberblat/Decentralized-Blockchain-Network" rel="noopener noreferrer" target="_blank">
               <Button colored>GitHub</Button>
               </a>
               <Button colored>PDF</Button>
               <Button colored>Live Demo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
               <IconButton name="share" />
             </CardMenu>
           </Card>

           {/*Elections*/}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/897/0*QnRkpn9cqWJECc_n) center / cover'}} >Blockchain elections</CardTitle>
                <CardText>
                Decentralized App voting system for the upcoming elections based on blockchain fundamentals written in solidity and nodeJS
                </CardText>
                <CardActions border>
                 <a href="https://github.com/AZilberblat/BlockChain-Elections" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                  </a>
                  <Button colored>PDF</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/*2d game*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.appearition.com/wp-content/uploads/2017/03/Unity-Logo-featured.png) center / cover'}} >2D Game</CardTitle>
             <CardText>
               My very first 2D game in unity
             </CardText>
             <CardActions border>
              <a href="https://github.com/AZilberblat/GameHW3" rel="noopener noreferrer" target="_blank">
               <Button colored>GitHub</Button>
               </a>
               <Button colored>PDF</Button>
               <Button colored>Live Demo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
               <IconButton name="share" />
             </CardMenu>
           </Card>

           {/*3d game*/}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.appearition.com/wp-content/uploads/2017/03/Unity-Logo-featured.png) center / cover'}} >3D game</CardTitle>
                <CardText>
                My very first 3D game in unity
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>PDF</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </div>
      )
 }
}

  render() {
    return(
      <div className = "category-tabs">
       <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>Java</Tab>
        <Tab>Android</Tab>
        <Tab>Blockchain</Tab>
        <Tab>Unity</Tab>
        <Tab>Flutter</Tab>
       </Tabs>


        <Grid>
         <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
         </Cell>


        </Grid>



      </div>
    )
  }
}

export default Projects;
