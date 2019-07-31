import React, {Component} from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import NavBar from "./components/NavBar";
import "./App.css";

let animalsClicked= [];
let score= 0;
let instructions= "Click on an image to earn points, but don't click any image twice!"

class App extends Component {
    state = {
        animals,
        animalsClicked,
        score,
        instructions
    };

    // event for clicking on animal, determining if clicking animal again
    animalClick = event => {
        var thisAnimal = event.target.alt;
        console.log(thisAnimal)
        var duplicateAnimal = this.state.animalsClicked.indexOf(thisAnimal) > -1;

        if (duplicateAnimal) {
            // resets game
            this.setState({
                // sorts animals in different random order
                animals: this.state.animals.sort(function(a, b) {
                    return 0.5 - Math.random();
                }),
                animalsClicked: [],
                score: 0,
                instructions: "Uh oh! You've already picked the adorable " + thisAnimal  + "! Play again?"
            });
        } else {
            this.setState({
                animals: this.state.animals.sort(function(a, b) {
                    return 0.5 - Math.random();
                }),
                // add this animal to animalsClicked array
                animalsClicked: this.state.animalsClicked.concat(thisAnimal),
                score: this.state.score + 1,
                instructions: "Good job! Click another baby animal!"
            }, 
            // if all baby animals are click and game is won
            () => {
                if (this.state.score === 12) {
                    this.setState({
                        animals: this.state.animals.sort(function(a, b) {
                            return 0.5 - Math.random();
                        }),
                        animalsClicked: [],
                        score: 0,
                        instructions: "You've click on all the cutie pies! Congrats!"
                    })
                }
            }
            )
        }
    }


    render() {
        return (
            <div>
                <NavBar
                    score={this.state.score}
                />
                <Wrapper>
                    <h1 className="instructions">{this.state.instructions}</h1>
                    {this.state.animals.map(animal => (
                        <AnimalCard
                            animalClick= {this.animalClick}
                            key={animal.id}
                            id={animal.id}
                            name={animal.name}
                            image={animal.image}
                        />
                    ))}
                </Wrapper>
            </div>
        )
    }
}

export default App;

