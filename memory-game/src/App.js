import React, {Component} from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import NavBar from "./components/NavBar";
import "./App.css";

let animalsClicked= [];
let score= 0;

class App extends Component {
    state = {
        animals,
        animalsClicked,
        score
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
            });
            alert("You've already picked the adorable "+ thisAnimal  + "! Play again?")
        } else {
            this.setState({
                animals: this.state.animals.sort(function(a, b) {
                    return 0.5 - Math.random();
                }),
                // add this animal to animalsClicked array
                animalsClicked: this.state.animalsClicked.concat(thisAnimal),
                score: this.state.score + 1
            }, 
            // if all baby animals are click and game is won
            () => {
                if (this.state.score === 12) {
                    alert("You've click on all the cutie pies! Congrats!");
                    this.setState({
                        animals: this.state.animals.sort(function(a, b) {
                            return 0.5 - Math.random();
                        }),
                        animalsClicked: [],
                        score: 0
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
                    <h1 className="instructions">Click on an image to earn points, but don't click on any more than once!</h1>
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

