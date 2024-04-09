import Users from '../Users';

it('Mock API test case', async () => {
  global.fetch = jest.fn().mockImplementation(() => {
    var result = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return {
            id: 2,
          };
        },
      });
    });
    return result;
  });
  const response = await Users.all();
  expect(response.id).toBe(2);
});
