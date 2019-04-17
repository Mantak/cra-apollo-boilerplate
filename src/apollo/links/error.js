import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  let description = '';
  graphQLErrors &&
    graphQLErrors.forEach((e, i) => {
      description += `错误${i + 1}: ${e.message} `;
    });
  console.log(description);
  // notification.error({
  // duration: 0,
  // message: networkError.toString(),
  // description,
  // });
});

export default errorLink;
