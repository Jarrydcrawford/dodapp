import { Formik } from 'formik';
import * as React from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
import { Button, Form } from 'semantic-ui-react';

import { CREATE_VOTE, CreateVoteMutation } from '../../graphql/mutations';
import { Player } from '../../types/gql';

interface Props {
  matchId: string;
  players: Player[];
  onSubmitted: () => void;
}

interface Fields {
  comment: string;
  playerId: string;
  matchId: string;
  type: 'dotd';
}

export const VoteForm = withApollo(
  ({ matchId, players, onSubmitted, client }: WithApolloClient<Props>) => {
    return (
      <CreateVoteMutation mutation={CREATE_VOTE}>
        {createVote => {
          return (
            <Formik
              initialValues={
                { comment: '', playerId: '', matchId, type: 'dotd' } as Fields
              }
              onSubmit={values => {
                createVote({ variables: values }).then(r => {
                  if (r && r.data && r.data.vote.validation === null) {
                    // rather than update the specific bit of apollo cache, we'll just
                    // clean the whole thing so votes get updated
                    client.resetStore();
                    return onSubmitted();
                  }

                  alert('Validation failed');
                });
              }}
            >
              {({ handleSubmit, handleBlur, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    {/* I had to use plain html form elements here as semantic ui
                    doesn't seem to support "name" prop needed by formik */}
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="playerId"
                    >
                      {players.map(player => (
                        <option value={player.id} key={player.id}>
                          {player.name}
                        </option>
                      ))}
                    </select>
                  </Form.Field>

                  <Form.Field>
                    <textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="comment"
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
            </Formik>
          );
        }}
      </CreateVoteMutation>
    );
  },
);
