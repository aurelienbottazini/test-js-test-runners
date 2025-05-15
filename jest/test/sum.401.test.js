const sum = require('../sum');

test('adds 30 + 83 to equal 113', () => {
  expect(sum(30, 83)).toBe(113);
});