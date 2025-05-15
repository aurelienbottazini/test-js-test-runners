const sum = require('../sum');

test('adds 87 + 26 to equal 113', () => {
  expect(sum(87, 26)).toBe(113);
});