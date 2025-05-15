const sum1197 = require('../sum1197.js');

test('adds 69 + 49 to equal 118 + offset 0.3077968963353692', () => {
  expect(sum1197(69, 49)).toBe(118 + 0.3077968963353692);
});