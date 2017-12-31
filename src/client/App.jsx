require('./stylesheets/main.scss');

import { Page } from './components/Page.jsx';
import { Navbar } from './components/Navbar.jsx';

const React = require('react');

class App extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Navbar />
                <Page />
            </div>
        );
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
