import React, { Component } from 'react';
import { connect } from './react-redux/index';

const mapStateToProps = state => {
    return {
        theme: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeColor: color => {
            dispatch({
                type: 'UPDATE_THEME_COLOR', themeColor: color
            })
        }
    }
}
class Demo extends Component {
    // 把每个组件的 static抽到 hoc connect中复用
    // static contextTypes = {
    //     store: PropTypes.object
    // }
    constructor(props){
        super(props);
        this.state = {
            color: '#333'
        }
    }
    changeColor = color => {
        // dispatch
        this.props.changeColor(color);
    }
    componentWillReceiveProps(nextProps) {
        // getState
        this.setState({
            color: nextProps.theme.themeColor
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2 style={{color: this.state.color}}>react-redux</h2>
                <button onClick = {() => this.changeColor('red')}>变红</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick = {() => this.changeColor('blue')}>变蓝</button>
            </div>
        );
    }
}

Demo = connect(mapStateToProps, mapDispatchToProps)(Demo);

export default Demo;