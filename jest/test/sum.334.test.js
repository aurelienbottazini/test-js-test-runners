const sum = require('../sum');

test('adds 92 + 21 to equal 113', () => {
  expect(sum(92, 21)).toBe(113);
});