import * as React from 'react';
import styled from 'react-emotion';
import { Button, Card, Icon } from 'semantic-ui-react';

import { sampleVotes } from '../../data';

export interface Vote {
  text: string;
}

export interface Props {
  votes: Vote[];
}

interface State {
  currentVote: number;
}

const StyledArticle = styled('article')<{ visible: boolean }>`
  display: ${props => (props.visible ? 'flex' : 'none')} !important;
`;

export class ViewVotes extends React.Component<Props, State> {
  state = {
    currentVote: 1,
  };

  public render(): JSX.Element {
    return (
      <>
        {(this.props.votes || sampleVotes).map((vote, idx) => (
          <Card
            as={StyledArticle}
            fluid={true}
            key={idx}
            visible={this.state.currentVote === idx + 1}
          >
            <Card.Content
              as="h2"
              textAlign="center"
              content={`Vote ${this.state.currentVote}`}
            />
            <Card.Content content={vote.text} />
          </Card>
        ))}
        <Button
          disabled={this.state.currentVote === 1}
          floated="left"
          icon={true}
          labelPosition="left"
          onClick={this.handlePrevVote}
        >
          <Icon name="arrow left" />
          Previous
        </Button>
        <Button
          disabled={
            this.state.currentVote === (this.props.votes || sampleVotes).length
          }
          floated="right"
          icon={true}
          labelPosition="right"
          onClick={this.handleNextVote}
        >
          <Icon name="arrow right" />
          Next
        </Button>
      </>
    );
  }

  private handleNextVote = (): void => {
    this.setState(prevState => ({
      currentVote:
        prevState.currentVote >= (this.props.votes || sampleVotes).length
          ? prevState.currentVote
          : prevState.currentVote + 1,
    }));
  };

  private handlePrevVote = (): void => {
    this.setState(prevState => ({
      currentVote: prevState.currentVote <= 1 ? 1 : prevState.currentVote - 1,
    }));
  };
}
