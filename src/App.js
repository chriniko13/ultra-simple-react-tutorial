import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';

/*
    Basic React Capabilities:

    1)  Event Handlers
    2)  Refs && Constructor and binding methods
    3)  State
    4)  Set State
    5)  Creating/importing components
    6)  Passing and using props
    7)  Prop types
    8)  Default props
    9)  Updating props
    10) Lifecycle methods
    11) Controlled/uncontrolled inputs
    12) Conditional rendering strategies

 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Some Title'
        };

        // binding methods
        this.onChange = this.onChange.bind(this);
        this.clickToChangeTitle = this.clickToChangeTitle.bind(this);
    }

    static onClick() {
        alert('Clicked!');
    }

    // static onChange(event) {
    //     console.log(event.target.value);
    // }

    onChange() {
        console.log(this.input.value);
    }

    clickToChangeTitle() {
        this.setState({
            title: 'Some New Title'
        })
    }

    render() {
        const list = [1, 2, 3, 4, 5];

        const msg = 'some message';

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <h1>{this.state.title}</h1>
                {msg}
                <br/>
                {
                    list.map(item => {
                        return (
                            <div key={item} onClick={App.onClick}>{item}</div>
                        );
                    })
                }
                <br/>
                <input onChange={this.onChange} ref={instance => this.input = instance}/>
                <br/>
                <input type="button" onClick={this.clickToChangeTitle} value="Change the title"/>

                <MyComponent
                    title={this.state.title} //Note: updating props.
                    name="chriniko" //Note: comment/uncomment to see what happens.
                    clickMethod={this.clickToChangeTitle}/>

                <br/>

                <MyComponent2/>

            </div>
        );
    }
}

export default App;
