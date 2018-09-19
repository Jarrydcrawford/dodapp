import * as React from 'react';
import styled, { injectGlobal } from 'react-emotion';

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
`;

const Section = styled('section')`
  padding: 20px;
`;

class App extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Main>
        <header>{/* Hamburger */}</header>
        <Section>
          <h1>Dodapp</h1>
          <p>
            Dodapp makes it easier for you to collect DOD and MOM votes, without
            losing any of the crudeness or mockery.
          </p>
          <button>How it works</button>
        </Section>
      </Main>
    );
  }
}

export default App;
