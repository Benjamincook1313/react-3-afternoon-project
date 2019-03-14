import React, { Component } from 'react'
import Display from './display'

class Nav extends Component {
  constructor(){
    super()
    this.state = {
      pageNum: 0
    }
  }
  handleNext=()=>{
    if(this.state.pageNum > -1){
      this.setState({
        pageNum: this.state.pageNum + 1
      })
    }
  }
  handlePrevious=()=>{
    if(this.state.pageNum < 25){
      this.setState({
        pageNum: this.state.pageNum - 1
      })
    }
  }
  render(){
    return(
      <nav className='nav'>
            <div className='whiteBox'>
              <Display page={this.state.pageNum}/>
            </div>
            <div className='previous' onClick={() => this.handlePrevious()}> Previous</div>
            <div className='next' onClick={()=> this.handleNext()}>Next</div>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
          </nav>
    )
  }
}

export default Nav