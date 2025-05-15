const sum = require('../sum');

test('adds 57 + 59 to equal 116', () => {
  expect(sum(57, 59)).toBe(116);
});