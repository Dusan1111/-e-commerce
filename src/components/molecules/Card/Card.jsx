import { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { email, name } = this.props.monster;
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${email}/set=set?2&size=180x180`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
