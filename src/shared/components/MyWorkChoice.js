'use strict';

import React from 'react';

class MyWorkChoice extends React.Component {
    render(){
        return(
          <div class="work-choice inner">
            <div style={{backgroundColor:"#1a1a1a"}} onClick={this.props.showWeb}>
                <h5 style={{color:"white"}}>Web development</h5>
            </div>
            <div style = {{backgroundColor:"white"}} onClick={this.props.showData}>
                <h5>Data analysis</h5>
            </div>
          </div>
        )
    }
}

export default MyWorkChoice;