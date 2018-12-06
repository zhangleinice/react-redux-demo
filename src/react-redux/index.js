import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Provider extends Component{
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }
    static childContextTypes = {
        store: PropTypes.string
    }
    getChildContext() {
        return { 
            store: this.props.store
        };
    }
    render() {
        return <div>
                    <h2>provider</h2>
                    {this.props.children}
                </div>
    }
}