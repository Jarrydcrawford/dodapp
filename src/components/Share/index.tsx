import * as React from 'react';

export interface Props {
  url: string;
}
export class Share extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <>
        <input type="text" readOnly={true} value={this.props.url} />
        <button>Copy</button>
        <button>Share</button>
        <button>Open in browser</button>
      </>
    );
  }
}
