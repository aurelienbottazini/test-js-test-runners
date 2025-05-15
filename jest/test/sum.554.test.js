const sum554 = require('../sum554.js');

test('adds 89 + 43 to equal 132 + offset 0.9888264673895726', () => {
  expect(sum554(89, 43)).toBe(132 + 0.9888264673895726);
});