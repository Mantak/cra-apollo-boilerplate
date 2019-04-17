import { createHttpLink } from 'apollo-link-http';
import { gqlServer } from 'configs/api';

const httpLink = createHttpLink({ uri: gqlServer });

export default httpLink;
