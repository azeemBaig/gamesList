import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Sort } from "./components/sort/sort.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      searchField: "",
      sortValue: "",
    };
  }

  componentDidMount() {
    fetch("http://starlord.hackerearth.com/gamesext")
      .then((res) => res.json())
      .then((res) => this.setState({ games: res }));
  }

  render() {
    console.log("games", this.state.games);
    const { games, searchField, sortValue } = this.state;
    const filteredGames = games.filter((game) =>
      game.title.toString().toLowerCase().includes(searchField.toLowerCase())
    );
    const sortGames = games.sort(function (a, b) {
      if (sortValue == "slth") {
        return a.score - b.score;
      } else if (sortValue === "shtl") {
        return b.score - a.score;
      }
    });

    return (
      <div className="App">
        <h1>Publicis Sapient Games</h1>
        <SearchBox
          placeholder="search games"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        {/* <Sort onSelect={(e) => this.setState({sortValue:e.target.value})} /> */}

        <CardList games={(sortGames, filteredGames)} />
      </div>
    );
  }
}

export default App;
