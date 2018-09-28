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
    if (
      !!this.props.location.search &&
      this.props.location.search !== prevProps.location.search
    ) {
      this.setState({ hasSubmitted: true });
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <h1>{this.getHeading(this.state.hasSubmitted)}</h1>
        {this.state.hasSubmitted ? (
          <Share url={location.href} />
        ) : (
          <>
            <input type="text" onChange={this.handleOnChange} />
            {!!this.state.dodName ? (
              <Link to={`${this.props.match.url}?=${this.state.dodName}`}>
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
