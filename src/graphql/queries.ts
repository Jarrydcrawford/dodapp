import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Match, MatchRootQueryTypeArgs } from '../types/gql';

export const GET_MATCH = gql`
  query Match($id: UUID!) {
    match(id: $id) {
      id
      opponent
      playedAt
      team {
        players {
          name
          id
        }
      }
      votes {
        id
        comment
        type
        player {
          name
          id
        }
      }
    }
  }
`;

export class MatchQuery extends Query<
  { match?: Match },
  MatchRootQueryTypeArgs
> {}
