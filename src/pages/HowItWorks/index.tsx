import * as React from 'react';

export interface Props {}

export class HowItWorks extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <>
        <h1>How it works</h1>
        <ol>
          <li>Share your voting link with your team</li>
        </ol>
        <button>Next</button>
        <ol>
          <li>Everyone creates their vote and submits it, warts and all</li>
        </ol>
        <button>Next</button>
        <ol>
          <li>
            The vote creator can read out the votes, or instantly publish them
            to everyone
          </li>
        </ol>
        <button>Start</button>
      </>
    );
  }
}
