import "./App.css";
import CardList from "./components/molecules/CardList/CardList";
import SearchBox from "./components/molecules/SearchBox/SearchBox";
import React, { useState, useEffect } from "react";

const App = () => {
  const [searchFieldValue, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]); //[value, setValue]

  console.log("render");

  useEffect(() => {
    console.log("Effect fired.");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchFieldValue);
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
};

export default App;
