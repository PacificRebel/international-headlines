import React, { Component } from 'react'

class NyTimes extends Component {
  constructor(props) {
    super(props)
    this.state = { items: []}
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      this.setState({items: data["results"]})
    })
  }

  render() {
    return (
      <div className="nytimes">
      {this.state.items.map((item, index) => <p key={index}><a href={item["url"]}>{item["title"]}</a></p>)}
      </div>
    )
  }
}

export default NyTimes
