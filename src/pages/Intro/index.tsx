import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button, Divider, Header } from 'semantic-ui-react';

export class Intro extends React.PureComponent<{}> {
  public render(): JSX.Element {
    return (
      <>
        <Header as="h2" size="small" textAlign="center">
          Dodapp makes it easier for you to collect DOD and MOM votes, without
          losing any of the crudeness or mockery.
        </Header>
        <Divider />
        <Button as={Link} to="/how-it-works">
          How it works
        </Button>
      </>
    );
  }
}
