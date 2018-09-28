import * as React from 'react';
import styled from 'react-emotion';

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

export class Intro extends React.Component<{}> {
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
