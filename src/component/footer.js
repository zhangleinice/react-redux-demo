import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    render() {
        // console.log(this.context);
        return (
            <div>footer</div>
        );
    }
}

export default Footer;