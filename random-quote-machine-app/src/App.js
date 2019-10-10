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
  { quote: "'You miss 100 percent of the shots you don't take - Wayne Gretzky", author: "Michael Scott" },
  { quote: "Treat every list like it's a list of sandwiches.", author: "Mikie Smit"},
  { quote: "Price is what you pay. Value is what you get.", author: "Ancient Proverb" },
  { quote: "Bacon is the cheese of meats.", author: "John D'Ortenzio" },
  { quote: "A ravioli is just an Italian potsticker.", author: "Grandma" },
  { quote: "Have you ever been in a submarine that lost its ability to surface and you're stuck inside it sinking to the ocean floor as the water pressure slowly crushes the sub around you and you hear the metal creaking and groaning as you approach your certain doom? It's like that.", author: "John D'Ortenzio" },
  { quote: "Choose your words tastefully, because someday you may have to eat them", author: "Paula" },
  { quote: "It was just as insulting whether you heard it or not", author: "Kevin" },
  { quote: "Do or do not. There is no try", author: "Yoda" },
  { quote: "There is a white haired old man cutting wood in your yard.", author: "Bob" }
]

// Define color bank
var colorBank = ["#001f3f", "#0074D9", "#3b5e80", "#39AAAA", "#3D9970", "green", "FFDC00", "#FF851B", "FF4136", "DDDDDD"];



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFooterChecked: false,
      quote: "...loading",
      author: "...please wait",
      color: "red",
      backgroundColor: "red",
      opacity: 1
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
    return this.state.isFooterChecked ? "footer" : "site";
  }

  toggleView(event){
    this.setState({ isFooterChecked: event.target.checked })
  }

  newQuote(){
    //fadeout text
    this.setState({opacity: 0});
    this.pickNewColor();

    //Wait a half second, then pick new quote, assign new color
    // to text, and fade text back in
    setTimeout(() => {
      var randIndex = Math.floor(Math.random()*quoteBank.length)
      this.setState({
        quote: quoteBank[randIndex].quote,
        author: quoteBank[randIndex].author,
        color: this.state.backgroundColor
      })
      this.setState({opacity: 1})
    },500);

  }

  pickNewColor(){
    var randIndex = Math.floor(Math.random() * colorBank.length);
    this.setState({ backgroundColor: colorBank[randIndex] })
  }

  componentDidMount(){
    this.newQuote();
  }

  render(){
    var curView = this.assignViewClass();
    
    var curBackgroundStyle = { backgroundColor: this.state.backgroundColor };
    var curColorStyle = { color: this.state.color };
    var curTweetLink = `https://twitter.com/intent/tweet?hastags=quotes&text=${this.state.quote}`

    return (
      <div className="App" style={curBackgroundStyle}>
        {/* Include Grading Script for Free Code Camp */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        <header>
          <h1>Random Quote Machine</h1>
          view: <button onClick={this.displayAsSite}>website</button> <ToggleSwitch onChange={this.toggleView} checked={this.state.isFooterChecked} /> <button onClick={this.displayAsFooter}>footer</button>
          <h5>see source on <a href="https://github.com/msmit1123/RandomQuoteMachine">GitHub</a></h5>
        </header>

        <div id="quote-box" className={curView} style={curColorStyle}>
          <div id="text" className={curView} style={ {opacity: this.state.opacity} }>
            "{this.state.quote}"
          </div>
          
          <div id="author" className={curView} style={{ opacity: this.state.opacity }}>
            -{this.state.author}
          </div>

          <div id="button-container" className={curView}>
            <Button id="new-quote" onClick={this.newQuote} color={this.state.backgroundColor}>New Quote</Button> 
            <Button onClick={() => document.getElementById("tweet-quote").click()} color={this.state.backgroundColor}><a href={curTweetLink} id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a></Button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
