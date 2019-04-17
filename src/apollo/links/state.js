import { withClientState } from 'apollo-link-state';
import { stateCache, stateDefaults, stateResolvers } from 'apollo/states';

const stateLink = withClientState({
  cache: stateCache,
  defaults: stateDefaults,
  resolvers: { Mutation: stateResolvers },
});
export default stateLink;
