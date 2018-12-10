import React, { Component } from 'react';
import { Provider } from './react-redux/index';
import { createStore } from './redux/index';
import Context from './context';
import Footer from './component/footer';
import Demo from './demo';

class App extends Component {
  render() {
    return (
      <div>
        <Context/>
        <Provider store={{test:'test'}}>
          <Footer/>
        </Provider>
        <Provider store={{color: 'pink'}}>
          <Demo/>
        </Provider>
      </div>
    );
  }
}

export default App;
