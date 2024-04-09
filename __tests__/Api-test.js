import Users from '../Users';
import 'isomorphic-fetch';

it('API test case', async () => {
  const response = await Users.all();
  expect(response.movies[1].title).toEqual('Star Wars');
});
