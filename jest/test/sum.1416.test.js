const sum1416 = require('../sum1416.js');

test('adds 29 + 25 to equal 54 + 0.18471123482434992', () => {
  expect(sum1416(29, 25)).toBe(54 + 0.18471123482434992);
});