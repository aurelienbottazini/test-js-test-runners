const sum = require('../sum');

test('adds 43 + 70 to equal 113', () => {
  expect(sum(43, 70)).toBe(113);
});