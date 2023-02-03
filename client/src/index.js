import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {CommentProvider} from "./context/comment"
import {CityProvider} from "./context/cityContext"
import {ViewProvider} from "./context/viewContext"
import {UserProvider} from "./context/userContext"

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider template={AlertTemplate}>
        <CommentProvider>
          <ViewProvider>
            <CityProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </CityProvider>
          </ViewProvider>
        </CommentProvider>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById('root')
);