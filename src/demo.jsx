import React, { Component } from 'react';
import { connect } from './react-redux/index';

const mapStateToProps = state => {
    return {
        color: state.color
    }
}
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>react-redux</h2>
            </div>
        );
    }
}

Demo = connect(mapStateToProps)(Demo);

export default Demo;