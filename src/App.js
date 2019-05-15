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



function LoginButton(props) {
  return (
      <button onClick={props.onClick}>
        Login
      </button>
  );
}
function LogoutButton(props) {
  return (
      <button onClick={props.onClick}>
        Logout
      </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
    );
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}




class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
  }
}




function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />
  );
  return (
      <ul>
        <p> Normal Map </p>
        {listItems}
        <hr />
        <p> Embedded Map </p>
        {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />
        )}
      </ul>
  );
}

function Blog(props) {
  const sidebar = (
      <ul>
        {props.posts.map((post) =>
            <li key={post.id}>
              {post.title}
            </li>
        )}
      </ul>
  );
  const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
  );
  return (
      <div>
        {sidebar}
        {content}
      </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];




const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

function App2() {
  return (
      <div>
        <hr />
        <p> BLOG (Key Concept) </p>
        <hr />
        <Blog posts={posts} />
        <hr />
        <p> NumberList (List Concept)</p>
        <hr />
        <NumberList numbers={numbers}/>
        <hr />
        <p> LoginControl (Render with If States)</p>
        <hr />
        <LoginControl />
        <hr />
        <p> Toggle (Button text State)</p>
        <hr />
        <Toggle />
        <hr />
        <p> Clock (Render interval Concept)</p>
        <hr />
        <Clock />
        <hr />
        <p> App (Initial)</p>
        <hr />
        <App />
      </div>
  );
}

ReactDOM.render(
    <App2 />,
    document.getElementById('root')
);
