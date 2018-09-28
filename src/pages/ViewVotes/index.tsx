import * as React from 'react';
import styled from 'react-emotion';

import { sampleVotes } from '../../data';

export interface Vote {
  text: string;
}

export interface Props {
  votes: Vote[];
}

interface State {
  currentVote: number;
}

const StyledArticle = styled('article')<{ visible: boolean }>`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export class ViewVotes extends React.Component<Props, State> {
  state = {
    currentVote: 1,
  };

  public render(): JSX.Element {
    return (
      <>
        {(this.props.votes || sampleVotes).map((vote, idx) => (
          <StyledArticle key={idx} visible={this.state.currentVote === idx + 1}>
            <h1>Vote {this.state.currentVote}</h1>
            <p>{vote.text}</p>
          </StyledArticle>
        ))}
        <button
          disabled={this.state.currentVote === 1}
          onClick={this.handlePrevVote}
        >
          Previous
        </button>
        <button
          disabled={
            this.state.currentVote === (this.props.votes || sampleVotes).length
          }
          onClick={this.handleNextVote}
        >
          Next
        </button>
      </>
    );
  }

  private handleNextVote = (): void => {
    this.setState(prevState => ({
      currentVote:
        prevState.currentVote >= (this.props.votes || sampleVotes).length
          ? prevState.currentVote
          : prevState.currentVote + 1,
    }));
  };

  private handlePrevVote = (): void => {
    this.setState(prevState => ({
      currentVote: prevState.currentVote <= 1 ? 1 : prevState.currentVote - 1,
    }));
  };
}
