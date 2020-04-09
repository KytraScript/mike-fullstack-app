import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            something: null
        }
    }

    render() {
        return (
            <div className={'main'}>
                PLACEHOLDER TEXT FOR APP COMPONENT
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
