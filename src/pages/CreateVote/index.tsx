import { Option } from 'catling';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Header } from 'semantic-ui-react';

import { MatchInfo } from '../../components/MatchInfo';
import { GET_MATCH, MatchQuery } from '../../graphql/queries';

import { VoteForm } from './VoteForm';

interface CreateVoteRouterProps {
  id: string;
}
export interface Props extends RouteComponentProps<CreateVoteRouterProps> {}

export function CreateVote(props: Props) {
  const handleViewResults = (): void =>
    props.history.push(`/${props.match.params.id}`);

  return (
    <MatchQuery query={GET_MATCH} variables={{ id: props.match.params.id }}>
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
                  Your bullshit vote
                </Header>
                <VoteForm
                  matchId={match.id}
                  players={match.team.players}
                  onSubmitted={handleViewResults}
                />
              </>
            );
          })
          .getOrElse('Match not found 😞');
      }}
    </MatchQuery>
  );
}
