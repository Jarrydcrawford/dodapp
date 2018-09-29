// import { parse } from 'qs';
import { Option } from 'catling';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Form, Header, TextArea } from 'semantic-ui-react';

import { MatchInfo } from '../../components/MatchInfo';
import { GET_MATCH, MatchQuery } from '../../graphql/queries';

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
    const { match } = this.props;
    return (
      <MatchQuery query={GET_MATCH} variables={{ id: match.params.id }}>
        {({ data, loading }) => {
          if (loading) {
            return <span>Loading...</span>;
          }
          return Option(data)
            .flatMap(d => Option(d.match))
            .map(match => {
              return (
                <>
                  <MatchInfo match={match} />
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
                        We&rsquo;re collecting votes from the other pricks.
                        Soon, the character assassinations will begin.
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
            })
            .getOrElse('Match not found 😞');
        }}
      </MatchQuery>
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
