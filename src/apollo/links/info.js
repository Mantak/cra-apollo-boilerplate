import { ApolloLink } from 'apollo-link';

const infoLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const operationName = Object.keys(response.data);
    const payload = response.data[operationName] || null;
    if (payload && payload.messages && payload.messages.length > 0) {
      payload.messages.forEach(message => {
        const description = message.message ? message.message : message;
        console.log(description);
        // notification.warning({
        // message: '出错啦～',
        // description,
        // duration: 6,
        // });
      });
    }
    return response;
  });
});
export default infoLink;
