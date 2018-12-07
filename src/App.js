import React, { Component } from 'react';
import { Provider } from './react-redux/index';
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
        <Demo/>
      </div>
    );
  }
}

export default App;
