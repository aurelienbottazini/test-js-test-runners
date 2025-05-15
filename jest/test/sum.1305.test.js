const sum = require('../sum');

test('adds 73 + 43 to equal 116', () => {
  expect(sum(73, 43)).toBe(116);
});