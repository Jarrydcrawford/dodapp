import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import { instructions } from '../../data/instructions';

export interface Props {
  active: boolean;
}

export interface State {
  step: number;
}

const StyledLi = styled('li')<Props>`
  display: ${props => (props.active ? 'block' : 'none')};
`;

export class HowItWorks extends React.Component<Props, State> {
  readonly state = {
    step: 0,
  };

  public render(): JSX.Element {
    return (
      <>
        <h1>How it works</h1>
        <ol>
          {instructions.map((instruction, idx) => (
            <StyledLi active={this.state.step === idx}>{instruction}</StyledLi>
          ))}
        </ol>
        {this.state.step >= instructions.length - 1 ? (
          <Link to="/create">Start</Link>
        ) : (
          <button onClick={this.nextStep}>Next</button>
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
