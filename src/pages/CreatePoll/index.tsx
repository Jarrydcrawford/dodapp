import * as React from 'react';

export class CreatePoll extends React.Component {
  componentDidUpdate() {}

  public render(): JSX.Element {
    return (
      <>
        <h1>Create your fucking DOD:</h1>
        <input type="text" value="" />
        <button>Next</button>
      </>
    );
  }
}
