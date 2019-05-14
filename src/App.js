import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends React.Component{

  render(){
    return <div className="App">
      <header className="App-header">
        {ele2}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={function () {
          console.log(formatName(user) +'Clicked')
        }}>Click Here!</button>
      </header>
    </div>
  }
}


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Yusuf',
  lastName: 'Temizer'
};

const element = (
    <h1>
      {formatName(user)} was here!
    </h1>
);

const ele2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello Yusuf'
);

const element2 = <App/>
ReactDOM.render(element2, document.getElementById('root'));

