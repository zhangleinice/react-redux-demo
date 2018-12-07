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

//connect hoc复用逻辑
export const connect = (mapStateToProps, mapDispatchToProps) => WarpComponent => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }

        static contextTypes = {
            store: PropTypes.object
        }

        componentWillMount() {
            const { store } = this.context;
            // init
            this._updateProps();
            // 监听变化自动更新
            store.subscribe(() => this._updateProps())
        }

        // TODO: 如何从 store 取数据？
        // mapStateToProps 告诉connect如何从context中取state
        // mapDispatchToProps 告诉connect如何从触发dispatch

        _updateProps() {
            const { store } = this.context;
            let stateProps = mapStateToProps
                    ? mapStateToProps(store.getState(), this.props)
                    : {} 
            let dispatchProps = mapDispatchToProps
                    ? mapDispatchToProps(store.dispatch, this.props)
                    : {};
            // 合并所有props
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            }) 

        }
        render() {
            return <WarpComponent {...this.state.allProps}/>
        }
    }
}