const sum1288 = require('../sum1288.js');

test('adds 2 + 36 to equal 38 + offset 0.9135088562824479', () => {
  expect(sum1288(2, 36)).toBe(38 + 0.9135088562824479);
});