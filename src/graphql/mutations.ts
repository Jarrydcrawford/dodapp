import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { VoteResponse, VoteRootMutationTypeArgs } from '../types/gql';

export const CREATE_VOTE = gql`
  mutation CreateVote(
    $comment: String!
    $matchId: String!
    $playerId: ID!
    $type: String!
  ) {
    vote(
      comment: $comment
      type: $type
      matchId: $matchId
      playerId: $playerId
    ) {
      validation {
        key
        reason
      }
    }
  }
`;

export class CreateVoteMutation extends Mutation<
  { vote: VoteResponse },
  VoteRootMutationTypeArgs
> {}
