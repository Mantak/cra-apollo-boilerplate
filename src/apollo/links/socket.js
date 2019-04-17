import { Socket as PhoenixSocket } from 'phoenix';
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { socketServer } from 'configs/api';

const socketLink = createAbsintheSocketLink(AbsintheSocket.create(new PhoenixSocket(socketServer)));

export default socketLink;
