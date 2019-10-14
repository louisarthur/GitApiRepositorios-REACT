import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// o switch faz com o que somente uma rota seja chamada por vez
import Main from './pages/Main';
import Repository from './pages/Respository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Main} />
        {/* receberá um parametro */}
        <Route path={'/repository/:repository'} component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
