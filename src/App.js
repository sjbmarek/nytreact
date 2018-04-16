import React, { Component } from "react";
import LetterCard from "./components/LetterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import letters from "./letters.json";
import "./App.css";

class App extends Component {

  state = {
    message: "Click a letter to begin!",
    topScore: 0,
    currentScore: 0,
    letters: letters,
    unselectedletters: letters
  }

  componentDidMount() {
  }

  shuffle = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  };

  selectLetter = id => {
  // Find this.state.unselectedletters for letter with an id equal to the id being clicked
  const findLetter = this.state.unselectedletters.find(item => item.id === id);
  // Set this.state.unselectedletter equal to the new letter array
   if(findLetter === undefined) {

        // failure to select a new letter
      this.setState({ 
          message: "INCORRECT!",
          topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
          currentScore: 0,
          letters: letters,
          unselectedletters: letters
      });
    }
 else{
    // selected a new letter
    const newLetters = this.state.unselectedletters.filter(item => item.id !== id);

    this.setState ({
      message: "CORRECT!",
      currentScore:this.state.currentScore + 1,
      letters: letters,
      unselectedletters: newLetters
    });

 }
  
  this.shuffle(letters);
};



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
     <Navbar 
      message={this.state.message}
      currentScore={this.state.currentScore}
      topScore={this.state.topScore}
     />
      <Title></Title>
      <Wrapper >
        {this.state.letters.map(oneletter => (
          

          <LetterCard
            
            id={oneletter.id}
            key={oneletter.id}
            image={oneletter.image}
            selectLetter={this.selectLetter}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>
      <Footer>&copy; Copyright Susan Marek</Footer>
      </div>
    );
  }
}

export default App;
