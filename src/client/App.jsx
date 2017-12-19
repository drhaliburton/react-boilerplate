require('./stylesheets/main.scss');

import {Card} from './components/Card.jsx';


import {testData} from '../config/mocks';

const React = require('react');

class App extends React.Component {
    render() {
        return (<div>
            <h1>{testData.users[0].display_name}</h1>
            <Card cardData={testData.users[0].cards.first} />
        </div>);
    }
}

if (typeof window !== 'undefined') {
    window.React = React;
}

console.log(testData.cards)


React.render(
    <App />,
    document.getElementById('app')
);

module.exports = App;
