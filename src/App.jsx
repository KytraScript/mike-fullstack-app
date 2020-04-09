import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuestionView from './QuestionView.jsx';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            questions: [],
            something: null
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/dummyQuestions')
            .then( (response) => {
                this.setState({
                    questions: response.data
                })
            })
            .catch( err => console.log(err));
    }

    render() {
        return (
            <div className={'main'}>
                PLACEHOLDER TEXT FOR APP COMPONENT
                <QuestionView/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
