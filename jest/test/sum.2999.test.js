const sum2999 = require('../sum2999.js');

test('adds 79 + 48 to equal 127 + 0.2860776152098563', () => {
  expect(sum2999(79, 48)).toBe(127 + 0.2860776152098563);
});