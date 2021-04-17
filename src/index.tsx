import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "@apollo/client";
import client from "./apolloClient";
import {BrowserRouter, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import Home from "./Home";
import {ToastProvider} from "react-toast-notifications";

ReactDOM.render((
    <ApolloProvider client={client}>
      <ToastProvider>
        <BrowserRouter>
          <Route path="/" component={Home} />
        </BrowserRouter>
      </ToastProvider>
    </ApolloProvider>
  ),
  document.getElementById('root')
);
