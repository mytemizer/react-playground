import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: [],
        };
    }


    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({
            posts: [1,2]
        });
        this.setState({
            comments: ["ali","veli"]
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleString()}.</h2>
                <FormattedDate date={this.state.date} />
                <h3> {this.state.comments.join("-")} + {this.state.posts.join(",")}</h3>
            </div>
        );
    }
}
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleString()}.</h2>;
}


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
