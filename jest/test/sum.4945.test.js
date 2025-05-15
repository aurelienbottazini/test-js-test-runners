const sum = require('../sum');

test('adds 90 + 26 to equal 116', () => {
  expect(sum(90, 26)).toBe(116);
});