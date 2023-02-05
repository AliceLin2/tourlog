import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import {CommentProvider} from "./context/comment"
import {CityProvider} from "./context/cityContext"
import {ViewProvider} from "./context/viewContext"
import {UserProvider} from "./context/userContext"

ReactDOM.render(
  <BrowserRouter>
      <CommentProvider>
        <ViewProvider>
          <CityProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </CityProvider>
        </ViewProvider>
      </CommentProvider>
  </BrowserRouter>,
  document.getElementById('root')
);