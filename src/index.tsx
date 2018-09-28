import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: '',
  }),
});

const ApolloApp = (Component: React.ComponentClass) => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root') as HTMLElement);
