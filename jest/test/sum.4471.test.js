const sum4471 = require('../sum4471.js');

test('adds 40 + 80 to equal 120 + 0.6560581930522227', () => {
  expect(sum4471(40, 80)).toBe(120 + 0.6560581930522227);
});