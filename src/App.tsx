import * as React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import { Route, Switch } from 'react-router';

import { Header } from './components/Header';
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

const Main = styled('main')`
  display: flex;
  height: 100vh;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Section = styled('section')`
  flex: 0 1 100%;
  padding: 20px;
`;

export class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Main>
        <Header />
        <Section>
          <Switch>
            <Route component={Intro} exact={true} path="/" />

            <Route component={HowItWorks} path="/how-it-works" />
            <Route component={CreatePoll} path="/create" />

            <Route path="/:id" component={ViewVotes} />
            <Route path="/:id/create" component={CreateVote} />
          </Switch>
        </Section>
      </Main>
    );
  }
}
