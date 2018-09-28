import * as React from 'react';

export class Share extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <h1>Link to your DOD:</h1>
        <input type="text" readOnly={true} />
        <button>Copy</button>
        <button>Share</button>
        <button>Open in browser</button>
      </>
    );
  }
}
