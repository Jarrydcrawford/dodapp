import * as React from 'react';

export class CreateVote extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <h1>Your bullshit vote:</h1>
        <textarea
          cols={30}
          id="vote"
          name="vote"
          placeholder="Tell us what you really think about your mates&hellip;"
          rows={10}
        />
      </>
    );
  }
}
