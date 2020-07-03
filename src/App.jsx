import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import {BrowserRouter} from "react-router-dom";

const store = ConfigureStore();

export default class App extends Component {
 


  render() {
    
    return (
      <Provider store={store}>
        <BrowserRouter>
        <MainComponent/>
        </BrowserRouter>
      </Provider>
    );
  }
}
