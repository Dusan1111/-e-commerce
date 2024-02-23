import "./App.css";
import { Component } from "react";
import CardList from "./components/molecules/CardList/CardList";
import SearchBox from "./components/molecules/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchString: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  //da ne bi iniiajlizovao stalno novu anonimnu funkciju na svaki klik tastature
  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchString: searchString };
    });
  };
  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <SearchBox
          onSearchChangeHander={onSearchChange}
          placeholder={"search monsters..."}
          className={"monsters-search-box"}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
