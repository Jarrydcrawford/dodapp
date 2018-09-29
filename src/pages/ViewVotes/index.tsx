import { Option } from 'catling';
import * as React from 'react';
import styled from 'react-emotion';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react';

import { GET_MATCH, MatchQuery } from '../../graphql/queries';

export interface Props extends RouteComponentProps<{ id: string }> {}

interface State {
  currentVote: number;
}

const StyledArticle = styled('article')<{ visible: boolean }>`
  display: ${props => (props.visible ? 'flex' : 'none')} !important;
`;

export class ViewVotes extends React.Component<Props, State> {
  state = {
    currentVote: 0,
  };

  public render(): JSX.Element {
    return (
      <MatchQuery
        query={GET_MATCH}
        variables={{ id: this.props.match.params.id }}
      >
        {({ data, loading }) => {
          if (loading) {
            return <span>Loading...</span>;
          }
          return Option(data)
            .flatMap(d => Option(d.match))
            .map(({ votes }) => {
              if (votes.length === 0) {
                return (
                  <div>
                    No votes yet.{' '}
                    <Link to={`/${this.props.match.params.id}/create`}>
                      Go and vote
                    </Link>
                  </div>
                );
              }

              return (
                <>
                  {votes.map((vote, idx) => (
                    <Card
                      as={StyledArticle}
                      fluid={true}
                      key={idx}
                      visible={this.state.currentVote === idx}
                    >
                      <Card.Content
                        as="h2"
                        textAlign="center"
                        content={`Vote ${this.state.currentVote + 1}`}
                      />
                      <Card.Content as="h3" textAlign="center">
                        {vote.player.name}
                      </Card.Content>
                      <Card.Content content={vote.comment} />
                    </Card>
                  ))}
                  <Button
                    disabled={this.state.currentVote === 0}
                    floated="left"
                    icon={true}
                    labelPosition="left"
                    onClick={this.handlePrevVote}
                  >
                    <Icon name="arrow left" />
                    Previous
                  </Button>
                  <Button
                    disabled={this.state.currentVote === votes.length - 1}
                    floated="right"
                    icon={true}
                    labelPosition="right"
                    onClick={() =>
                      this.setState(prevState => ({
                        currentVote: Math.min(
                          prevState.currentVote + 1,
                          votes.length,
                        ),
                      }))
                    }
                  >
                    <Icon name="arrow right" />
                    Next
                  </Button>
                  <div>
                    <Link to={`/${this.props.match.params.id}/create`}>
                      Add another vote
                    </Link>
                  </div>
                </>
              );
            })
            .getOrElse('Match not found 😞');
        }}
      </MatchQuery>
    );
  }

  private handlePrevVote = (): void => {
    this.setState(prevState => ({
      currentVote: prevState.currentVote <= 0 ? 0 : prevState.currentVote - 1,
    }));
  };
}
