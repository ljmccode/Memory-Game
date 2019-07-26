import React from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import "./App.css";

class App extends React.Component {
    state = {
        animals
    }



    render() {
        return (
            <Wrapper>
                <h1 className="title">Animals List</h1>
                {this.state.animals.map(animal => (
                    <AnimalCard
                        key={animal.id}
                        id={animal.id}
                        image={animal.image}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default App;