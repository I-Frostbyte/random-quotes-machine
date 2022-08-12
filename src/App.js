
import React from "react";
import './index.css';
import {FaTwitter, FaTumblr} from 'react-icons/fa';

class RandomQuote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textColor: null,
      Quotes: null
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  fetchQuotes = async () => {
    const request = await fetch("https://zenquotes.io/api/quotes").then((res) => {
      console.log(res);
      return res.json()
    })
    this.setState({
      Quotes: request
    })
  }

  newQuote() {
    const indexQuotes = Math.floor(Math.random() * this.state.Quotes.length)
    return this.state.Quotes[indexQuotes];
  }
  
  
  colors = ["grey", "lightgreen", "maroon", "lightblue", "red", "black", "topaz"];

  newColor(colorsArray) {
   const index = Math.floor(Math.random() * colorsArray.length)
   return colorsArray[index];
  } 
  /*
  handleClick(){
    this.setState({
      textColor: this.newColor(this.colors)
    });
  }
  */
 render () {
  return (
    <div id="quote-box">
      <div id="content-wrapper">
        <h1 id="text">{this.fetchQuotes}</h1>
        <p id="author">- Random Author</p>
        <div id="below-author">
          <div id="icons">
            <div id="twitter-icon">
              <a href="twitter.com/intent/tweet" id="tweet-quote"><FaTwitter size={20} style={{color: "#fff"}} class="fas fa-twitter" /></a>
            </div>
            <div id="tumblr-icon">
              <FaTumblr size={20} style={{color: "#fff"}} class="fas fa-tumblr" />
            </div>
          </div>
          <div id="new-quote-button">
            <button id="new-quote" style={{color: "#fff"}}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
    )
 }
  
  
}

export default RandomQuote;



/*
function App() {
  return (
    
  );
}

export default App;

*/
