const sum1390 = require('../sum1390.js');

test('adds 97 + 20 to equal 117 + offset 0.2687719514405795', () => {
  expect(sum1390(97, 20)).toBe(117 + 0.2687719514405795);
});