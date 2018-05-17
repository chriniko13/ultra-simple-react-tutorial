import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    clickMethod: PropTypes.func,
    title: PropTypes.string.isRequired
};

const defaultProps = {
  name: 'Default Name of MyComponent App'
};

class MyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
          description : 'Sample Description'
        };

        this.updateDescription = this.updateDescription.bind(this)
    }

    componentWillMount() {
        console.log('WILL_MOUNT')
        //For example: Ajax Requests, etc.
    }

    componentDidMount() {
        console.log('DID_MOUNT')
        //For example: Focus on component, etc.
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILL_UPDATE', this.props, this.state, nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DID_UPDATE', this.props, this.state, prevProps, prevState)
    }

    updateDescription(event){
        this.setState({description: event.target.value})
    }

    render() {

        const {title, name, clickMethod} = this.props;

        return (
            <div className="component">
                <h1>{title}</h1>
                <p>Name: {name}</p>
                <input type="button" value="Click me" onClick={clickMethod}/>
                <br/>

                <input defaultValue="name"/>
                <br/>

                <input value={this.state.description} onChange={this.updateDescription}/>
                <br/>

            </div>
        );
    }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
