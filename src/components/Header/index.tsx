import * as React from 'react';

export class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <header>
        <h1>Dodapp</h1>
        <nav>{/* Hamburger navigation */}</nav>
      </header>
    );
  }
}
