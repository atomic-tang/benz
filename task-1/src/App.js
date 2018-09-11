import React, { Component } from 'react';

// data to be asynchronously loaded
const asyncData = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Pineapple" },
  { name: "Mango" },
  { name: "Peach" },
  { name: "Melon" }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Football" },
        { name: "Baseball" },
        { name: "Basketball" },
        { name: "iPod Touch" },
        { name: "iPhone 5" },
        { name: "Nexus 7" }
      ]
    }
  }
  render() {
    const listItems = this.state.data.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      <div className="App">
        <input type="text" />
        {listItems }
      </div>
    );
  }
}

export default App;
