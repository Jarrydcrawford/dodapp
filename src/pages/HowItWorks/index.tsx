import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';

import { instructions } from '../../data';

export interface Props {
  active: boolean;
}

export interface State {
  step: number;
}

const StyledParagraph = styled('p')<Props>`
  display: ${props => (props.active ? 'block' : 'none')};
  text-align: center;
`;

export class HowItWorks extends React.Component<Props, State> {
  readonly state = {
    step: 0,
  };

  public render(): JSX.Element {
    return (
      <>
        <Header as="h2" textAlign="center">
          How it works
        </Header>
        {instructions.map((instruction, idx) => (
          <StyledParagraph active={this.state.step === idx}>{`${idx +
            1}. ${instruction}`}</StyledParagraph>
        ))}
        {this.state.step >= instructions.length - 1 ? (
          <Button as={Link} fluid={true} to="/create">
            Start
          </Button>
        ) : (
          <Button onClick={this.nextStep} fluid={true}>
            Next
          </Button>
        )}
      </>
    );
  }

  private nextStep = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  };
}
