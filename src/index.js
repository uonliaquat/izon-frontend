import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import { ApolloProvider } from '@apollo/react-hooks'
import reportWebVitals from './reportWebVitals';
import client from './client.js'

const Root = () => (
 <React.StrictMode>
      <ApolloProvider client={client}> 
          <App />
      </ApolloProvider>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
