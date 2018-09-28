import * as React from 'react';
import { Button, Form, Icon, Input } from 'semantic-ui-react';

export interface Props {
  url: string;
}
export class Share extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <>
        <Form.Field>
          <Input
            action={{
              labelPosition: 'right',
              icon: 'copy',
              content: 'Copy',
            }}
            readOnly={true}
            type="text"
            value={this.props.url}
          />
        </Form.Field>
        <Form.Field>
          <Button icon={true} labelPosition="right">
            <Icon name="share" />
            Share
          </Button>
          <Button icon={true} labelPosition="right">
            <Icon name="globe" />
            Open in browser&hellip;
          </Button>
        </Form.Field>
      </>
    );
  }
}
