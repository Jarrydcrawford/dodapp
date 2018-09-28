// import { parse } from 'qs';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Form, Header, TextArea } from 'semantic-ui-react';

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
        <Header as="h2" textAlign="center">
          {this.getHeading(this.state.hasSubmitted)}
        </Header>
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
            <Button fluid={true} onClick={this.handleViewResults}>
              Refresh
            </Button>
          </>
        ) : (
          <Form onSubmit={this.handleVoteSubmission}>
            <Form.Field>
              <TextArea
                autoHeight={true}
                placeholder="Tell us what you really think about your (team)mates&hellip;"
              />
            </Form.Field>
            <Form.Field>
              <Button fluid={true} type="submit">
                Submit
              </Button>
            </Form.Field>
          </Form>
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
