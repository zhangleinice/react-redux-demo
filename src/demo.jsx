import React, { Component } from 'react';
import { connect } from './react-redux/index';

const mapStateToProps = state => {
    return {
        theme: state
    }
}
class Demo extends Component {
    // 把每个组件的 static抽到 hoc connect中复用
    // static contextTypes = {
    //     store: PropTypes.object
    // }
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