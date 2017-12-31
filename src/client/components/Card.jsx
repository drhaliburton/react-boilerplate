const React = require('react');


export class Card extends React.Component {
  render() {
    return (
      <div>
        <h1 className="card">{this.props.cardData.title}</h1>
        <h2>{this.props.cardData.date}</h2>
      </div>
    )
  }
}