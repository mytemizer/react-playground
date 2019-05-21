import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import arlogo from "./arcelik.jpeg"
import homelogo from "./logo-homewhiz.svg"
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
      <Button onClick={props.onClick}>
        Login
      </Button>
  );
}
function LogoutButton(props) {
  return (
      <Button onClick={props.onClick}>
        Logout
      </Button>
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


class NameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitEssay = this.handleSubmitEssay.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSubmitEssay(event){
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <form onSubmit={this.handleSubmitEssay}>
                    <label>
                        Essay:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </form>
        )
    }
}


class FlavorForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Your favorite flavor is: ' + event.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">GrapeFruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="file" />
                <input type="submit" value="Submit"/>
            </form>

        );
    }
}


class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        checked={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }

}

function BoilingVerdict (props) {
    if (props.celsius >= 100)
        return <p>The water would boil.</p>;
    return <p>The water would not boil.</p>;
}


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value)

    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = ({temperature: '', scale: 'c'});
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}


function FancyBorder(props) {
    return (
        <div className="FancyBorder">
            <div className="FancyBorder-left">
                {props.left}
            </div>
            <div className="FancyBorder-right">
                {props.right}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );


}


class WelcomeDialog extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <FancyBorder left={<Clock />} right={<LoginControl/>} >
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </FancyBorder>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);


function BootstrapDeneme() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    1 of 2
                </div>
                <div className="col">
                    2 of 2
                </div>
            </div>
            <div className="w-100"></div>
            <div className="row">
                <div className="col">
                    1 of 3
                </div>
                <div className="col">
                    2 of 3
                </div>
                <div className="col">
                    3 of 3
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="w-100"></div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col align-self-start">
                        One of three columns
                    </div>
                    <div className="col align-self-center">
                        One of three columns
                    </div>
                    <div className="col align-self-end">
                        One of three columns
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-4">
                        One of two columns
                    </div>
                    <div className="col-4">
                        One of two columns
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        One of two columns
                    </div>
                    <div className="col-4">
                        One of two columns
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-4">
                        One of two columns
                    </div>
                    <div className="col-4">
                        One of two columns
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-4">
                        One of two columns
                    </div>
                    <div className="col-4">
                        One of two columns
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-4">
                        One of two columns
                    </div>
                    <div className="col-4">
                        One of two columns
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-9">.col-9</div>
                <div className="col-4">.col-4 Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                <div className="col-6">.col-6
                    Subsequent columns continue along the new line.</div>
            </div>
            <hr/>
            <div className="media">
                <img className="ml-3" src={arlogo} alt="LOGO" />
                <img className="ml-3" src={homelogo} alt="LOGO" />
            </div>
        </div>

        )


}

function App2() {
  return (
      <div>

        <hr />
        <p> Bootstrap </p>
        <hr />
        <BootstrapDeneme/>
        <hr />
        <p> Left-right-children (Composition vs Inher Concept) </p>
        <hr />
        <WelcomeDialog/>
        <hr />
        <p> Calculator (Lifting state up Concept) </p>
        <hr />
        <Calculator/>
        <hr />
        <p> Reservation (Multiple Input Concept) </p>
        <hr />
        <Reservation/>
        <hr />
        <p> FlavorForm (Select Concept) </p>
        <hr />
        <FlavorForm/>
        <hr />
        <p> NameForm (Input Concept) </p>
        <hr />
        <NameForm/>
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