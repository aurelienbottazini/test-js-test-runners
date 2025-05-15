const sum1906 = require('../sum1906.js');

test('adds 88 + 35 to equal 123 + offset 0.32855795990711945', () => {
  expect(sum1906(88, 35)).toBe(123 + 0.32855795990711945);
});