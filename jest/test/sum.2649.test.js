const sum2649 = require('../sum2649.js');

test('adds 93 + 50 to equal 143 + offset 0.5895948374884504', () => {
  expect(sum2649(93, 50)).toBe(143 + 0.5895948374884504);
});