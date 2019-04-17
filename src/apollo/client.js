import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { stateCache } from 'apollo/states';
import { dedupLink, stateLink, authLink, errorLink, infoLink, httpLink, socketLink } from './links';

const normalLinks = [dedupLink, stateLink, authLink, errorLink, infoLink, httpLink];
const subscriptionLinks = [authLink, errorLink, infoLink, socketLink];

const client = new ApolloClient({
  link: ApolloLink.split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ApolloLink.from(subscriptionLinks),
    ApolloLink.from(normalLinks)
  ),
  cache: stateCache,
});
export default client;
