import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex', flexFlow:"wrap"}}>{this.props.skill}<ProgressBar style={{margin: 'auto' , width: '95%', margin:"10px"}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
