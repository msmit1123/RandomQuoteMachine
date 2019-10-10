/**
 * Import Node Dependencies
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

/**
 * Import other dependencies
 */
//CSS
import './App.scss';

/**
 * Import Components
 */
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFooterChecked: false
    }
    this.displayAsFooter = this.displayAsFooter.bind(this);
    this.displayAsSite = this.displayAsSite.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.newQuote = this.newQuote.bind(this);
  }

  displayAsFooter(){
    this.setState({isFooterChecked: true})
  }

  displayAsSite(){
    this.setState({isFooterChecked: false})
  }

  assignViewClass(){
    return this.state.isFooterChecked ? "footer" : "site"
  }

  toggleView(event){
    this.setState({ isFooterChecked: event.target.checked })
  }

  newQuote(){
    this.newText();
    this.newColor();
  }

  newText(){
    console.log("new text");
  }

  newColor(){
    console.log("new color");
  }

  componentDidMount(){
    this.newQuote();
  }

  render(){
    var curView = this.assignViewClass();

    return (
      <div className="App">
        {/* Include Grading Script for Free Code Camp */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        <header>
          <h1>Random Quote Machine</h1>
          view: <button onClick={this.displayAsSite}>website</button> <ToggleSwitch onChange={this.toggleView} checked={this.state.isFooterChecked} /> <button onClick={this.displayAsFooter}>footer</button>
        </header>

        <div id="quote-box" className={curView}>
          <div id="text" className={curView}>
            "You miss 100% of the shots you don't take" -Wayne Gretzky
          </div>
          
          <div id="author" className={curView}>
            -Michael Scott
          </div>

          <div id="button-container" className={curView}>
            <Button id="new-quote" onClick={this.newQuote}>New Quote</Button> 
            <Button onClick={() => document.getElementById("tweet-quote").click()}><a href="https://www.google.com" id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a></Button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
