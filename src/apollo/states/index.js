import { InMemoryCache } from 'apollo-cache-inmemory';

import userState from 'apollo/states/users/state';
import userResolvers from 'apollo/states/users/resolvers';
import githubState from 'apollo/states/github/state';
import githubResolvers from 'apollo/states/github/resolvers';

export const stateCache = new InMemoryCache().restore(window.__APOLLO_STATE__);
export const stateDefaults = { ...userState, ...githubState };
export const stateResolvers = { ...userResolvers, ...githubResolvers };
