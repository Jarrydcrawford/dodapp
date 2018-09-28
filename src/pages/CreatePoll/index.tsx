import { parse } from 'qs';
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Form, Header } from 'semantic-ui-react';

import { Share } from '../../components/Share';

export interface Props extends RouteComponentProps {}

export interface State {
  dodName: string;
  hasSubmitted: boolean;
}

export class CreatePoll extends React.Component<Props, State> {
  readonly state = {
    dodName: '',
    hasSubmitted: false,
  };

  componentDidMount(): void {
    const params: { id?: string } = parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    if (!!params.id) {
      this.setState({ hasSubmitted: true });
    }
  }

  componentDidUpdate(prevProps: Props): void {
    const params: { id?: string } = parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const prevParams: { id?: string } = parse(prevProps.location.search, {
      ignoreQueryPrefix: true,
    });

    if (!!params.id && params.id !== prevParams.id) {
      this.setState({ hasSubmitted: true });
    }
  }

  public render(): JSX.Element {
    const params: { id?: string } = parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    return (
      <>
        <Header as="h2" textAlign="center">
          {this.getHeading(this.state.hasSubmitted)}
        </Header>
        <Form>
          {this.state.hasSubmitted ? (
            <Share
              url={`http://${window.location.host}/${this.state.dodName ||
                params.id}/create`}
            />
          ) : (
            <Form.Field>
              <Form.Input type="text" onChange={this.handleOnChange} />
              <Button
                as={Link}
                disabled={!this.state.dodName}
                fluid={true}
                to={`${this.props.match.url}?id=${this.state.dodName}`}
              >
                Next
              </Button>
            </Form.Field>
          )}
        </Form>
      </>
    );
  }

  private getHeading = (hasSubmitted: boolean): string =>
    hasSubmitted ? 'Link to your DOD' : 'Create your fucking DOD';

  private handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    this.setState({ dodName: event.target.value });
  };
}
