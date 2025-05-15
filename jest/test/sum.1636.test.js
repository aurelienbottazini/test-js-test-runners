const sum = require('../sum');

test('adds 35 + 78 to equal 113', () => {
  expect(sum(35, 78)).toBe(113);
});