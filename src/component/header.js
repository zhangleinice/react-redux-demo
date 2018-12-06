import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    // 必须声明才能获取context
    static contextTypes = {
        color: PropTypes.string
    }
    render() {
        return (
            <div style={{color: this.context.color}}>header</div>
        );
    }
}

export default Header;