import { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";
class CardList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;
