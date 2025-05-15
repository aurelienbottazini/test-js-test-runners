const sum471 = require('../sum471.js');

test('adds 82 + 25 to equal 107 + 0.29553077801474725', () => {
  expect(sum471(82, 25)).toBe(107 + 0.29553077801474725);
});