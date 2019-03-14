import React, { Component } from 'react'
import data from '../data'

class Display extends Component{

  render(){
    let {page} = this.props
    return(
      <div className='info'>
        <div className='pageNum'>{page + 1}/25</div>
        <h1 className='name'>{data[page].name.first} {data[page].name.last}</h1>
        <h2>From: <p>{data[page].city}, {data[page].country}</p></h2>
        <h2>Job Title: <p>{data[page].title}</p></h2>
        <h2>Employer: <p>{data[page].employer}</p></h2>
        <h2>Favorite Movies:
          <ol>
          <li>{data[page].favoriteMovies[0]}</li>
          <li>{data[page].favoriteMovies[1]}</li>
          <li>{data[page].favoriteMovies[2]}</li>
          </ol>
        </h2>
      </div>
    )
  }
}
export default Display