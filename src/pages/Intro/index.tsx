import * as React from 'react';
import { Link } from 'react-router-dom';

export class Intro extends React.PureComponent<{}> {
  public render(): JSX.Element {
    return (
      <>
        <p>
          Dodapp makes it easier for you to collect DOD and MOM votes, without
          losing any of the crudeness or mockery.
        </p>
        <Link to="/how-it-works">How it works</Link>
      </>
    );
  }
}
