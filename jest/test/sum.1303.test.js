const sum = require('../sum');

test('adds 71 + 20 to equal 91', () => {
  expect(sum(71, 20)).toBe(91);
});