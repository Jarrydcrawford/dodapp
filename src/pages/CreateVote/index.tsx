// import { parse } from 'qs';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CreateVoteRouterProps {
  id: string;
}
export interface Props extends RouteComponentProps<CreateVoteRouterProps> {}

export interface State {
  hasSubmitted: boolean;
}

export class CreateVote extends React.Component<Props, State> {
  readonly state = {
    hasSubmitted: false,
  };

  public render(): JSX.Element {
    return (
      <>
        <h1>{this.getHeading(this.state.hasSubmitted)}</h1>
        {this.state.hasSubmitted ? (
          <>
            <p>
              We&rsquo;ve received your damning opinion of your
              &lsquo;friend&rsquo; and their so-called
              &lsquo;performance&rsquo;.
            </p>
            <p>
              We&rsquo;re collecting votes from the other pricks. Soon, the
              character assassinations will begin.
            </p>
            <button onClick={this.handleViewResults} type="button">
              Refresh
            </button>
          </>
        ) : (
          <form onSubmit={this.handleVoteSubmission}>
            <textarea
              cols={30}
              id="vote"
              name="vote"
              placeholder="Tell us what you really think about your (team)mates&hellip;"
              rows={10}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </>
    );
  }

  private getHeading = (hasSubmitted: boolean): string =>
    hasSubmitted ? 'Vote submitted!' : 'Your bullshit vote:';

  private handleViewResults = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    this.props.history.push(`/${this.props.match.params.id}`);
  };

  private handleVoteSubmission = (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();

    this.setState({ hasSubmitted: true });
  };
}
