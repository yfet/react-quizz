import React from 'react';
import QuestionList from './quizz/QuestionList.jsx';
import ScoreBox from './quizz/ScoreBox.jsx';
import Results from './quizz/Results.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: "What is your name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Steven'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: "What is your mother's name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Sara'
                        },
                        {
                            id: 'b',
                            text: 'Sue'
                        },
                        {
                            id: 'c',
                            text: 'Donna'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 3,
                    text: "What is your father's name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Pov'
                        },
                        {
                            id: 'b',
                            text: 'Harry'
                        },
                        {
                            id: 'c',
                            text: 'Wayne'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 4,
                    text: "What is your friends name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Paul'
                        },
                        {
                            id: 'c',
                            text: 'Jose'
                        }
                    ],
                    correct: 'a'
                },
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current});
    }

    setScore(score) {
        this.setState({score});
    }

    render() {
        if (this.state.current > this.state.questions.length) {
            var scorebox = '';
            var results = <Results {...this.state} />;
        } else {
            scorebox = <ScoreBox {...this.state} />;
            results = '';
        }
        return (
            <div>
                {results}
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
            </div>
        )
    }
}

export default App