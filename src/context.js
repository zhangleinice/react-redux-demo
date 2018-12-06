import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './component/header';

class Context extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: 'red'
        };
    }
    // 如果要设置context，childContextTypes必须写
    static childContextTypes = {
        color: PropTypes.string
    }
    // set context
    getChildContext() {
        return {
            color: this.state.color
        }
    }
    render() {
        return (
            <div>
                <h2>context</h2>
                <Header/>
            </div>
        );
    }
}

export default Context;