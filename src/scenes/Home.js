import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_SELECTED_REPOSITORIES } from 'apollo/states/github/queries';
import { SELECT_REPOSITORY } from 'apollo/states/github/mutations';
import './home.css';

import { GET_REPOSITORIES_OF_ORGANIZATION } from 'apollo/graphql/github/queries';
import { STAR_REPOSITORY } from 'apollo/graphql/github/mutations';

import Hello from 'components/Hello';

const Repositories = ({ repositories }) => (
  <Query query={GET_SELECTED_REPOSITORIES}>
    {({ data: { selectedRepositoryIds } }) => (
      <RepositoryList repositories={repositories} selectedRepositoryIds={selectedRepositoryIds} />
    )}
  </Query>
);

const RepositoryList = ({ repositories, selectedRepositoryIds }) => (
  <ul>
    {repositories.edges.map(({ node }) => {
      const isSelected = selectedRepositoryIds.includes(node.id);

      const rowClassName = ['row'];

      if (isSelected) {
        rowClassName.push('row_selected');
      }

      return (
        <li className={rowClassName.join(' ')} key={node.id}>
          <Select id={node.id} isSelected={isSelected} /> <a href={node.url}>{node.name}</a>{' '}
          {!node.viewerHasStarred && <Star id={node.id} />}
        </li>
      );
    })}
  </ul>
);

const Star = ({ id }) => (
  <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
    {starRepository => (
      <button type="button" onClick={starRepository}>
        Star
      </button>
    )}
  </Mutation>
);

const Select = ({ id, isSelected }) => (
  <Mutation mutation={SELECT_REPOSITORY} variables={{ id, isSelected }}>
    {(toggleSelectRepository, result) => (
      <button type="button" onClick={toggleSelectRepository}>
        {isSelected ? 'Unselect' : 'Select'}
      </button>
    )}
  </Mutation>
);

const Home = () => {
  return (
    <React.Fragment>
      <Hello />
      <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
        {({ data: { organization }, loading }) => {
          if (loading || !organization) {
            return <div>Loading ...</div>;
          }

          return <Repositories repositories={organization.repositories} />;
        }}
      </Query>
    </React.Fragment>
  );
};
export default Home;
