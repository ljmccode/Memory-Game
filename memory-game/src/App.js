import React from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
    state = {
        animals,
        score: 0,
        highscore: 0
    }



    render() {
        return (
            <div>
                <NavBar
                    score={this.state.score}
                    highscore={this.state.highscore}
                />
                <Wrapper>
                    <h1 className="instructions">Click on an image to earn points, but don't click on any more than once!</h1>
                    {this.state.animals.map(animal => (
                        <AnimalCard
                            key={animal.id}
                            id={animal.id}
                            image={animal.image}
                        />
                    ))}
                </Wrapper>
            </div>
        )
    }
}
export default App;

