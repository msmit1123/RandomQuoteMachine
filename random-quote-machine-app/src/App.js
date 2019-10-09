/**
 * Import Node Dependencies
 */
import React from 'react';

/**
 * Import other dependencies
 */
//CSS
import './App.scss'

/**
 * Import Components
 */
import Button from './components/Button'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view:"footer"
    }
  }

  render(){
    return (
      <div className="App">
        {/* Include Grading Script for Free Code Camp */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        <header>
          <h1>Random Quote Machine</h1>
          view: <span>website | SWITCH | footer</span>
        </header>
        <div id="quote-box" className={this.state.view}>
          <div id="text" className={this.state.view}>
            "You miss 100% of the shots you don't take" -Wayne Gretzky
          </div>
          <div id="author" className={this.state.view}>
            -Michael Scott
          </div>
          <div id="button-container" className={this.state.view}>
            <Button id="new-quote" onClick={null}>New Quote</Button> 
            <Button><a href="www.google.com" id="tweet-quote">Tweet</a></Button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
