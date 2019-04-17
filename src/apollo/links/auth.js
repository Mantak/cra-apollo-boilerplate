import { setContext } from 'apollo-link-context';
import { tokenName } from 'configs/app';

// 添加一个带token的中间件，如果有token就会带上
const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem(tokenName);
  const token = '51ee154f1a434663bb261470308cf6b0a57e9452';
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});
export default authLink;
