import React, { Component } from 'react'

export default class FetchRandomUser extends Component {

  state = {
    loading: true,
    people: []
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      people: data.results
    })
  }
  
  render() {
    return (
      <div>
        {this.state.loading || !this.state.people 
          ? <div>loading...</div> 
          : <>
            {this.state.people.map(person => (
              <div key={person.login.uuid}>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <div>{person.name.title}</div>
                <img src={person.picture.large} alt="" />
              </div>
            ))}
          </>
        }
      </div>
    )
  }
}

