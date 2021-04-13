import './App.css'
import React, {Component} from 'react';


const list = [
  {
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },];

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      list: list,
      };
    }


  render() {
        return (
          <div className="App">
          {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
          )}
          </div>
        );
        }
}
export default App;