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
  public render(): JSX.Element {
    return (
      <>
        {Object.entries(this.props.votes).map(([id, vote]) => (
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
