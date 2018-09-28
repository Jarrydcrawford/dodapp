import * as React from 'react';
import { injectGlobal } from 'react-emotion';
import { Route, Switch } from 'react-router';

import { CreatePoll } from './pages/CreatePoll';
import { CreateVote } from './pages/CreateVote';
import { HowItWorks } from './pages/HowItWorks';
import { Intro } from './pages/Intro';
import { ViewVotes } from './pages/ViewVotes';

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: serif;
  }
`;

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Switch>
        <Route component={Intro} exact={true} path="/" />

        <Route component={HowItWorks} exact={true} path="/how-it-works" />
        <Route component={CreatePoll} exact={true} path="/create" />

        <Route path="/:id" component={ViewVotes} />
        <Route path="/:id/create" component={CreateVote} />
      </Switch>
    );
  }
}

export default App;
