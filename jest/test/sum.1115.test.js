const sum1115 = require('../sum1115.js');

test('adds 97 + 60 to equal 157 + 0.32706048458658554', () => {
  expect(sum1115(97, 60)).toBe(157 + 0.32706048458658554);
});