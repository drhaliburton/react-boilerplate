const React = require('react');
import { Card } from './Card.jsx';
import { testData } from '../../config/mocks';


export class Page extends React.Component {
  render() {
    return (
      <div className="view-container">
        <Card cardData={testData.users[0].cards.first} />
      </div>
    )
  }
}