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


//Define quote bank
var quoteBank = [
  { quote: "All that is gold does not glitter, Not all those who wander are lost, The old that is strong does not wither, Deep roots are not reached by the frost.", author: "JRR Tolkien" },
  { quote: "'You miss 100% of the shots you don't take - Wayne Gretzky", author: "Michael Scott" },
  { quote: "Treat every list like it's a list of sandwiches.", author: "Mikie"},
  { quote: "There are only two professions condemned in the Bible: being satan, and being a tax collector. Frankly, I'm not sure which is worse.", author: "John" },
  { quote: "Price is what you pay. Value is what you get.", author: "Ancient Proverb" },
  { quote: "Bacon is the cheese of meats.", author: "John" },
  { quote: "A ravioli is just an Italian potsticker.", author: "John" },
  { quote: "Have you ever been in a submarine that lost its ability to surface and you're stuck inside it sinking to the ocean floor as the water pressure slowly crushes the sub around you and you hear the metal creaking and groaning as you approach your certain doom? It's like that.", author: "John" },
  { quote: "I don't want to be the idiot stuck holding the goose when the chicken man comes to town", author: "Mikie" },
  { quote: "It was just as insulting whether you heard it or not", author: "Kevin" },
  { quote: "The law is a shield, not a sword. Those who attempt to wield it as a sword deserver to be struck by it", author: "Mikie" },
  { quote: "There is a white haired old man cutting wood in your yard.", author: "Bob" }
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFooterChecked: false,
      quote: "",
      author: "",
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
    var randIndex = Math.floor(Math.random()*quoteBank.length)
    this.setState({
      quote: quoteBank[randIndex].quote,
      author: quoteBank[randIndex].author
    })

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
            "{this.state.quote}"
          </div>
          
          <div id="author" className={curView}>
            -{this.state.author}
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
