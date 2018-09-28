import * as React from 'react';
import { Route, Switch } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import { Header } from './components/Header';
import { CreatePoll } from './pages/CreatePoll';
import { CreateVote } from './pages/CreateVote';
import { HowItWorks } from './pages/HowItWorks';
import { Intro } from './pages/Intro';
import { ViewVotes } from './pages/ViewVotes';

export class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Container as="main">
        <Header />
        <Container as="section" text={true} textAlign="center">
          <Switch>
            <Route component={Intro} exact={true} path="/" />

            <Route component={HowItWorks} path="/how-it-works" />
            <Route component={CreatePoll} path="/create" />

            <Route component={ViewVotes} exact={true} path="/:id" />
            <Route component={CreateVote} path="/:id/create" />
          </Switch>
        </Container>
      </Container>
    );
  }
}
