import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: {},
      date: "",
      content: {}
    }
  }

  componentDidMount() {
    return fetch('https://tysonhood.com/wp-json/wp/v2/posts/')
    .then(response => response.json())
    .then(data => {
      // data.forEach(el => {
        const { title, date, content } = data[0];
        this.setState({title, date, content});
        // console.log(el.title)
        console.log('state ', this.state)
      // })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <h2> Wordpress Blog </h2>
        <h3>{this.state.title.rendered}</h3>
        <p> {this.state.date} </p>

        <div
            className= "content"
            dangerouslySetInnerHTML={{ __html: this.state.content.rendered }}>
        </div>
      </div>
    );
  }
}

export default App;
