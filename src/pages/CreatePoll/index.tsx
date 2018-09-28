import { parse } from 'qs';
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

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
    if (!!this.props.location.search) {
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
        <h1>{this.getHeading(this.state.hasSubmitted)}</h1>
        {this.state.hasSubmitted ? (
          <Share
            url={`http://${window.location.host}/${this.state.dodName ||
              params.id}/create`}
          />
        ) : (
          <>
            <input type="text" onChange={this.handleOnChange} />
            {!!this.state.dodName ? (
              <Link to={`${this.props.match.url}?id=${this.state.dodName}`}>
                Next
              </Link>
            ) : (
              <span>Next</span>
            )}
          </>
        )}
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
