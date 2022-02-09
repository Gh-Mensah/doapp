import React, { Component } from 'react';

class debug extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         verb:"rich",
         check:true
      }
    }

    onChangeverb = ()=>{
        this.setState(prevState => ({
            check: !prevState.check
          }));
    }
    
  render() {
      const {verb,check}= this.state
    return (
    <div onClick={this.onChangeverb}>
        {check? (<h1> {verb} </h1>):(<h1> run </h1>)}
    </div>
    )
  }
}

export default debug;
