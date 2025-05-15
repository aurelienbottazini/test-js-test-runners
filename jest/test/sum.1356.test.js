const sum = require('../sum');

test('adds 81 + 35 to equal 116', () => {
  expect(sum(81, 35)).toBe(116);
});