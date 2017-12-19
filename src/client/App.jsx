require('./stylesheets/main.scss');
import {testData} from '../config/mocks';

const React = require('react');

class App extends React.Component {
    render() {
        return <h1>${testData.users[0].display_name}</h1>
    }
}

if (typeof window !== 'undefined') {
    window.React = React;
}


React.render(
    <App />,
    document.getElementById('app')
);

module.exports = App;
