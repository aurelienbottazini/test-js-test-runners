const sum = require('../sum');

test('adds 78 + 35 to equal 113', () => {
  expect(sum(78, 35)).toBe(113);
});