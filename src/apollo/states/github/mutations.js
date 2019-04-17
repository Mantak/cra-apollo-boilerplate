import gql from 'graphql-tag';

export const SELECT_REPOSITORY = gql`
  mutation($id: ID!, $isSelected: Boolean!) {
    toggleSelectRepository(id: $id, isSelected: $isSelected) @client {
      id
      isSelected
    }
  }
`;
