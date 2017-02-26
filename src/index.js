import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Local Components
import App from './App';
import Cursos from './Cursos';
import Sobre from './Sobre';
import Home from './Home';
import Curso from './Curso';


ReactDOM.render((
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="cursos" component={Cursos}>
                    <Route path=":id" component={Curso}/>
              </Route>
              <Route path="sobre" component={Sobre} />
          </Route>
      </Router>
  ),
  document.getElementById('root')
);
