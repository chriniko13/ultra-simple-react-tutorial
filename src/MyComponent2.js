import React, {Component} from 'react';


class MyComponent2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shouldRenderTitle: true
        }
    }

    renderTitle() {
        if (!this.state.shouldRenderTitle) return null;

        return <h1>Sample Title</h1>
    }

    render() {

        return (
            <div className="component">

                {this.renderTitle()}

            </div>
        );

    }
}

export default MyComponent2;