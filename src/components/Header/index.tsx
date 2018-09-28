import * as React from 'react';
import styled from 'react-emotion';
import { Container, Divider, Header as Heading } from 'semantic-ui-react';

const StyledHeading = styled('h1')`
  margin-top: 1rem !important;
`;

export class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <Container as="header" fluid={true} textAlign="center">
        <Heading as={StyledHeading}>Dodapp</Heading>
        <nav>{/* Hamburger navigation */}</nav>
        <Divider />
      </Container>
    );
  }
}
