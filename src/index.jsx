import React, { Component } from 'react';
import ReactDom from 'react-dom'
import App from './App';

import 'bootstrap-social/bootstrap-social.css';
class Index extends Component {
  render() {
    return (
      <div> 
          <App/>
           </div>
    );
  }
}

ReactDom.render(<Index/>,document.getElementById('root'))
