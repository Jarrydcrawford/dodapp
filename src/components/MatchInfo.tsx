import * as React from 'react';
import { Card } from 'semantic-ui-react';

import { Match } from '../types/gql';

interface Props {
  match: Match;
}

export const MatchInfo = ({ match }: Props) => {
  return (
    <Card>
      Opponent: {match.opponent}
      <br />
      Date: {match.playedAt}
    </Card>
  );
};

export default MatchInfo;
