import * as React from 'react';

export interface Vote {
  text: string;
}

export interface Props {
  votes: { [voteId: number]: Vote };
}

interface State {
  currentVote: number;
}

export class ViewVotes extends React.Component<Props, State> {
  state = {
    currentVote: 1,
  };

  public render(): JSX.Element {
    const {
      votes = {
        '1': 'foo',
        '2': 'bar',
      },
    } = this.props;
    return (
      <>
        {Object.entries(votes).map(([id, vote]) => (
          <>
            <h1>Vote {this.state.currentVote}</h1>
            <p>{vote.text}</p>
          </>
        ))}
        <button>Previous</button>
        <button>Next</button>
      </>
    );
  }
}
